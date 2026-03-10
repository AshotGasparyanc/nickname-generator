import express from "express";
import cors from "cors";
import Groq from "groq-sdk";

const app = express();
const PORT = 3001;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const apiKey = process.env.GROQ_API_KEY;

app.post("/api/generate", async (req, res) => {
  if (!apiKey) {
    res.status(500).json({ error: "GROQ_API_KEY is not set on the server" });
    return;
  }

  const { country = "Japan" } = req.body as { country?: string };

  const groq = new Groq({ apiKey });

  const prompt = `You are a creative gaming nickname generator deeply familiar with ${country}'s culture.

Generate exactly 12 unique gaming nicknames inspired by ${country}.

Draw from any of these cultural layers:
- Local internet memes, viral moments, and online slang
- Pop culture: movies, music artists, TV shows, anime, sports legends
- History, mythology, folklore, and national symbols
- Street slang, regional expressions, or phonetic quirks of the local language
- Famous local foods, places, or anything iconic to ${country}

Style rules:
- Mix styles: some cool/intimidating, some funny/ironic, some nostalgic, some hyper-local
- Short to medium length (1–3 words or a compound word)
- Use romanized local words or clever wordplay when it fits
- No generic English-only nicknames — make them feel like they could only come from ${country}
- No explanations

Return ONLY a JSON array of strings, nothing else. Example: ["NightWolf", "ShadowByte"]`;

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

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
