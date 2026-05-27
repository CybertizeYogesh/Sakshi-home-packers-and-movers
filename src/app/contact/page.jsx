import RawOriginalPage from '@/components/rawOriginalPage';
import { metadataFor } from '@/data/seoData';

export const metadata = metadataFor('/contact');

export default function Page() {
  return <RawOriginalPage route="/contact" />;
}
