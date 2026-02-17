import { Helmet } from "react-helmet-async";

type SEOProps = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

const BASE_URL = "https://marcelomaia.dev";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

const SEO = ({
  title = "Marcelo Maia | Full-Stack Developer",
  description = "Portfolio de Marcelo Maia, desenvolvedor full-stack com experiência em React, Node.js, TypeScript e mais.",
  path = "",
  image = DEFAULT_IMAGE,
}: SEOProps) => {
  const url = `${BASE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
