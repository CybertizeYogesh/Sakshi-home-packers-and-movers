import RawOriginalPage from '@/components/rawOriginalPage';
import { metadataFor } from '@/data/seoData';

export const metadata = metadataFor('/blog-grid');

export default function Page() {
  return <RawOriginalPage route="/blog-grid" />;
}
