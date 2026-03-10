import { useParams, Link, Navigate } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import NicknameGenerator from "../components/NicknameGenerator";
import { getCategoryBySlug, categories } from "../data/categories";

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const related = categories
    .filter((c) => c.slug !== category.slug)
    .slice(0, 6);

  return (
    <>
      <SEOHead
        title={category.title}
        description={category.metaDescription}
        canonicalPath={`/${category.slug}`}
      />

      <div className="min-h-screen bg-[#08080f] px-6 py-12 text-white">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-1 text-sm text-zinc-500 transition hover:text-zinc-300"
          >
            ← All generators
          </Link>

          <h1 className="mt-2 bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-4xl font-bold text-transparent">
            {category.h1}
          </h1>

          <div className="mt-8">
            <NicknameGenerator context={category.promptContext} />
          </div>

          {/* Related generators */}
          <div className="mt-20 border-t border-zinc-800/60 pt-12">
            <h2 className="text-lg font-semibold text-zinc-300">
              More Generators
            </h2>
            <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((cat) => (
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
