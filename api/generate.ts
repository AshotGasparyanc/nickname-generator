import type { VercelRequest, VercelResponse } from "@vercel/node";
import Groq from "groq-sdk";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "GROQ_API_KEY is not set" });
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

    return res.json({ nicknames: parsed.slice(0, 12) });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("[generate] error:", message);
    return res.status(500).json({ error: message });
  }
}

function buildContextPrompt(context: string, nativeScript: boolean): string {
  return `You are a creative gaming nickname generator.

Generate exactly 12 unique gaming nicknames based on the following context:
${context}

Style rules:
- Mix styles: some cool/intimidating, some funny/ironic, some memorable
- Single word or CamelCase compound — NO spaces in any nickname
- Use clever wordplay, references, or thematic elements that fit the context
${nativeScript ? "- Write nicknames using the native script relevant to this context (e.g. Arabic letters, Cyrillic, Kanji, Hangul, etc.) where appropriate" : "- Use Latin letters only"}
- No explanations

Return ONLY a JSON array of strings, nothing else. Example: ["NightWolf", "ShadowByte"]`;
}

function buildCountryPrompt(country: string, nativeScript: boolean): string {
  const isAzerbaijan = country.toLowerCase().includes("azerbaijan");

  return `You are a creative gaming nickname generator deeply familiar with ${country}'s culture.

Generate exactly 12 unique gaming nicknames inspired by ${country}.

Draw from any of these cultural layers:
- Local internet memes, viral moments, and online slang
- Pop culture: movies, music artists, TV shows, anime, sports legends
- History, mythology, folklore, and national symbols
- Street slang, regional expressions, or phonetic quirks of the local language
- Famous local foods, places, or anything iconic to ${country}

Style rules:
- Mix styles: some cool/intimidating, some funny/ironic, some nostalgic, some hyper-local
- Single word or CamelCase compound — NO spaces in any nickname
${nativeScript ? `- Write nicknames using the native script of ${country} (e.g. Arabic letters for Arabic, Cyrillic for Russian, Kanji/Kana for Japanese, Hangul for Korean, etc.)` : "- Use romanized Latin letters"}
- No generic English-only nicknames — make them feel like they could only come from ${country}
- No explanations
${isAzerbaijan ? "- Do NOT reference Karabakh, Qarabağ, Nagorno-Karabakh, or any related territory, conflict, or imagery" : ""}

Return ONLY a JSON array of strings, nothing else. Example: ["NightWolf", "ShadowByte"]`;
}
