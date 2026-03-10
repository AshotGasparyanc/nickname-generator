import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import SEOHead from "../components/SEOHead";
import NicknameGenerator from "../components/NicknameGenerator";
import { categories } from "../data/categories";

countries.registerLocale(enLocale);

export default function HomePage() {
  const [country, setCountry] = useState("Japan");

  useEffect(() => {
    fetch("/api/geo")
      .then((r) => r.json())
      .then(({ countryCode }: { countryCode: string | null }) => {
        if (!countryCode) return;
        const name = countries.getName(countryCode, "en");
        if (name) setCountry(name);
      })
      .catch(() => {/* silently keep the default */});
  }, []);

  const countryList = useMemo(() => {
    const names = countries.getNames("en", { select: "official" });
    return Object.entries(names)
      .map(([code, name]) => ({ code, name }))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  return (
    <>
      <SEOHead
        title="AI Gaming Nickname Generator — Free Online Tool"
        description="Generate unique gaming nicknames for any country or culture with AI. Free nickname generator for gamers — PUBG, Valorant, Minecraft, and more."
        canonicalPath="/"
      />

      <div className="min-h-screen bg-[#08080f] px-6 py-12 text-white">
        <div className="mx-auto max-w-3xl">
          <h1 className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent">
            Nickname Generator
          </h1>

          <div className="mt-8">
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-violet-500/60 focus:ring-2 focus:ring-violet-500/20 md:w-auto"
            >
              {countryList.map((c) => (
                <option key={c.code} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mt-6">
            <NicknameGenerator country={country} />
          </div>

          {/* Category links grid — good for internal linking + SEO */}
          <div className="mt-20 border-t border-zinc-800/60 pt-12">
            <h2 className="text-xl font-semibold text-zinc-300">
              Generators by Game &amp; Style
            </h2>
            <p className="mt-2 text-sm text-zinc-500">
              Get nicknames tailored to your game, vibe, or culture.
            </p>

            <div className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={`/${cat.slug}`}
                  className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm font-medium text-zinc-300 transition hover:border-violet-500/40 hover:text-violet-300"
                >
                  {cat.h1.replace("AI ", "")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
