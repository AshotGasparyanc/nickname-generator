import type { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Injected automatically by Vercel's edge network
  const code = req.headers["x-vercel-ip-country"];
  const countryCode = Array.isArray(code) ? code[0] : (code ?? null);
  res.json({ countryCode });
}
