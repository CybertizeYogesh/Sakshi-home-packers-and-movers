import RawOriginalPage from "@/components/rawOriginalPage";
import { blogs } from "@/data/blogData";
import { BUSINESS_NAME, SITE_URL, metadataFor } from "@/data/seoData";

export const dynamicParams = false;

function getBlog(slug) {
  return blogs.find((blog) => blog.slug === slug);
}

export function generateStaticParams() {
  return Array.from({ length: 10 }, (_, index) => ({ slug: `blog-${index + 1}` }));
}

export async function generateMetadata({ params }) {
  const resolved = await params;
  return metadataFor(`/blog-details/${resolved.slug}`);
}

function ArticleJsonLd({ blog }) {
  if (!blog) return null;

  const canonical = `${SITE_URL}/blog-details/${blog.slug}`;
  const image = new URL(blog.fullImage || blog.image, SITE_URL).toString();
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.excerpt,
    image,
    datePublished: "2024-12-05",
    dateModified: "2024-12-05",
    mainEntityOfPage: canonical,
    author: {
      "@type": "Organization",
      name: blog.author
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function Page({ params }) {
  const resolved = await params;
  const blog = getBlog(resolved.slug);

  return (
    <>
      <ArticleJsonLd blog={blog} />
      <RawOriginalPage route={`/blog-details/${resolved.slug}`} />
    </>
  );
}
