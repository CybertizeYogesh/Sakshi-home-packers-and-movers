import RawOriginalPage from '@/components/rawOriginalPage';
import { metadataFor } from '@/data/seoData';

export async function generateMetadata({ params }) {
  const resolved = await params;
  return metadataFor(`/blog-details/${resolved.slug}`);
}

export default async function Page({ params }) {
  const resolved = await params;
  return <RawOriginalPage route={`/blog-details/${resolved.slug}`} />;
}
