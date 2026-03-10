import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const apiKey = process.env.GROQ_API_KEY;

app.get("/api/geo", (_req, res) => {
  // x-vercel-ip-country is not available locally — return null to trigger fallback
  res.json({ countryCode: null });
});

app.post("/api/generate", async (req, res) => {
  if (!apiKey) {
    res.status(500).json({ error: "GROQ_API_KEY is not set on the server" });
    return;
  }

  const { country, context, nativeScript = false } = req.body as {
    country?: string;
    context?: string;
    nativeScript?: boolean;
  };

  const groq = new Groq({ apiKey });

  const prompt = context
    ? buildContextPrompt(context, nativeScript)
    : buildCountryPrompt(country ?? "Japan", nativeScript);

  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [{ role: "user", content: prompt }],
      temperature: 1,
    });

    const text = completion.choices[0]?.message?.content?.trim() ?? "";

    const cleaned = text
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    const parsed = JSON.parse(cleaned);

    if (!Array.isArray(parsed)) {
      throw new Error(`Unexpected response shape: ${text}`);
    }

    res.json({ nicknames: parsed.slice(0, 12) });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[generate] error:", message);
    res.status(500).json({ error: message });
  }
});

const NICKNAME_THEMES = [
  "anime",
  "politics",
  "history",
  "cartoon",
  "criminal",
  "medicine",
  "gaming",
  "fantasy",
  "cultural",
  "mythology",
  "technologies",
  "science",
  "crazy",
  "legends",
  "youtube",
  "memes",
  "reddit",
  "tiktok",
  "adult",
  "sports",
];

function pickRandomTheme(): string {
  const index = Math.floor(Math.random() * NICKNAME_THEMES.length);
  return NICKNAME_THEMES[index];
}

function buildContextPrompt(context: string, nativeScript: boolean): string {
  const theme = pickRandomTheme();

  return `You are a creative gaming nickname generator with a strong lean toward the "${theme}" universe.

Generate exactly 12 unique gaming nicknames based on the following context:
${context}

Style rules:
- Heavily draw inspiration from the "${theme}" theme — references, terminology, characters, or vibes from that world
- Mix styles: some cool/intimidating, some funny/ironic, some memorable
- Single word or CamelCase compound — NO spaces in any nickname
- Use clever wordplay, references, or thematic elements that fit the context
- For roughly 3–4 of the 12 nicknames, apply leet-speak substitutions to some letters (e.g. A→4, E→3, S→5, O→0, I→1, T→7) — mix it naturally, not every letter
${nativeScript ? "- Write nicknames using the native script relevant to this context (e.g. Arabic letters, Cyrillic, Kanji, Hangul, etc.) where appropriate" : "- Use Latin letters only"}
- No explanations

Return ONLY a JSON array of strings, nothing else. Example: ["N1ghtW0lf", "5hadowByte"]`;
}

function buildCountryPrompt(country: string, nativeScript: boolean): string {
  const isAzerbaijan = country.toLowerCase().includes("azerbaijan");
  const theme = pickRandomTheme();

  return `You are a creative gaming nickname generator deeply familiar with ${country}'s culture, with a strong lean toward the "${theme}" universe this session.

Generate exactly 12 unique gaming nicknames inspired by ${country}.

Draw from any of these cultural layers:
- Local internet memes, viral moments, and online slang
- Pop culture: movies, music artists, TV shows, anime, sports legends
- History, mythology, folklore, and national symbols
- Street slang, regional expressions, or phonetic quirks of the local language
- Famous local foods, places, or anything iconic to ${country}
- Blend the above with the "${theme}" theme for unexpected, creative combinations

Style rules:
- Mix styles: some cool/intimidating, some funny/ironic, some nostalgic, some hyper-local
- Single word or CamelCase compound — NO spaces in any nickname
${nativeScript ? `- Write nicknames using the native script of ${country} (e.g. Arabic letters for Arabic, Cyrillic for Russian, Kanji/Kana for Japanese, Hangul for Korean, etc.)` : "- Use romanized Latin letters"}
- No generic English-only nicknames — make them feel like they could only come from ${country}
- For roughly 3–4 of the 12 nicknames, apply leet-speak substitutions to some letters (e.g. A→4, E→3, S→5, O→0, I→1, T→7) — mix it naturally, not every letter
- No explanations
${isAzerbaijan ? "- Do NOT reference Karabakh, Qarabağ, Nagorno-Karabakh, or any related territory, conflict, or imagery" : ""}

Return ONLY a JSON array of strings, nothing else. Example: ["N1ghtW0lf", "5hadowByte"]`;
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
