import { useMemo, useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";

countries.registerLocale(enLocale);

function App() {
  const [country, setCountry] = useState("Japan");
  const [results, setResults] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const countryList = useMemo(() => {
    const names = countries.getNames("en", { select: "official" });
    return Object.entries(names)
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  async function generateNicknames() {
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ country }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error ?? `Server error ${res.status}`);
      }

      if (!Array.isArray(data.nicknames)) {
        throw new Error("Unexpected response from server");
      }

      setResults(data.nicknames);
      setCopiedIndex(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : String(err);
      console.error(err);
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  async function copyNickname(name: string, index: number) {
    await navigator.clipboard.writeText(name);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  }

  return (
    <div className="min-h-screen bg-[#08080f] px-6 py-12 text-white">
      <div className="mx-auto max-w-3xl">

        <h1 className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent">
          Nickname Generator
        </h1>
        <div className="mt-8 grid gap-3 md:grid-cols-[1fr_180px]">
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20"
          >
            {countryList.map((c) => (
              <option key={c.code} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>

          <button
            onClick={generateNicknames}
            disabled={loading}
            className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 font-semibold text-white transition hover:from-violet-500 hover:to-fuchsia-500 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                Generating…
              </span>
            ) : (
              "Generate"
            )}
          </button>
        </div>

        {error && (
          <div className="mt-6 rounded-xl border border-red-800/60 bg-red-950/30 p-4 text-sm text-red-400">
            {error}
          </div>
        )}

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((name, index) => {
            const copied = copiedIndex === index;
            return (
              <button
                key={`${name}-${index}`}
                onClick={() => copyNickname(name, index)}
                className={`group rounded-2xl border px-4 py-4 text-left transition-all duration-200 ${
                  copied
                    ? "border-emerald-500/50 bg-emerald-500/10"
                    : "border-zinc-800 bg-zinc-900 hover:border-violet-500/40 hover:bg-violet-500/5"
                }`}
              >
                <div className="text-lg font-semibold">{name}</div>
                <div
                  className={`mt-1 text-sm transition-colors ${
                    copied ? "text-emerald-400" : "text-zinc-500 group-hover:text-zinc-400"
                  }`}
                >
                  {copied ? "✓ Copied!" : "Tap to copy"}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
