import { Helmet } from "react-helmet-async";

type Props = {
  title: string;
  description: string;
  canonicalPath?: string;
};

const BASE_URL = "https://nicknamegenerator-eta.vercel.app";

export default function SEOHead({ title, description, canonicalPath = "" }: Props) {
  const canonical = `${BASE_URL}${canonicalPath}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
