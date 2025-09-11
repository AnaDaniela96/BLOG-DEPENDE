import { Helmet } from "react-helmet-async";

export default function Seo({
  title,
  description,
  url,          // p.ej. https://tu-dominio.com/blog/slug
  image,        // /img/og-xxx.jpg
  type = "article",
  publishedTime, // ISO date si es artículo
  tags = [],
}) {
  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
      {image && <meta name="twitter:image" content={image} />}

      {/* Article meta */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {tags.map((t) => (
        <meta property="article:tag" content={t} key={t} />
      ))}
      {/* Canonical (si ya tienes dominio) */}
      {url && <link rel="canonical" href={url} />}
    </Helmet>
  );
}
