import { useState } from "react";
import NicknameCard from "./NicknameCard";

type Props = {
  country?: string;
  context?: string;
};

export default function NicknameGenerator({ country, context }: Props) {
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [personal, setPersonal] = useState("");

  async function generate() {
    setLoading(true);
    setError("");

    try {
      const body = context
        ? { context, personal: personal.trim() || undefined }
        : { country: country ?? "Japan", personal: personal.trim() || undefined };

      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const raw = await res.text();

      if (!res.ok) {
        let message = `Server error ${res.status}`;
        try {
          const errData = JSON.parse(raw);
          if (errData.error) message = errData.error;
        } catch { /* raw wasn't JSON, keep the default message */ }
        throw new Error(message);
      }

      if (!raw) {
        throw new Error("Server returned an empty response");
      }

      let data: { nicknames?: unknown };
      try {
        data = JSON.parse(raw);
      } catch {
        throw new Error(`Unexpected response from server: ${raw.slice(0, 120)}`);
      }

      if (!Array.isArray(data.nicknames)) {
        throw new Error("Unexpected response from server");
      }

      setResults(data.nicknames);
      setCopiedIndex(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    } finally {
      setLoading(false);
    }
  }

  async function copy(name: string, index: number) {
    await navigator.clipboard.writeText(name);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  }

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          value={personal}
          onChange={(e) => setPersonal(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && !loading && generate()}
          maxLength={40}
          placeholder="Your name, word, or vibe (optional)"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 outline-none transition focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 md:w-96"
        />
      </div>

      <button
        onClick={generate}
        disabled={loading}
        className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-3 font-semibold text-white transition hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
            Generating…
          </span>
        ) : (
          "Generate Nicknames"
        )}
      </button>

      {error && (
        <div className="mt-6 rounded-xl border border-red-800/60 bg-red-950/30 p-4 text-sm text-red-400">
          {error}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((name, index) => (
            <NicknameCard
              key={`${name}-${index}`}
              name={name}
              copied={copiedIndex === index}
              onClick={() => copy(name, index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
