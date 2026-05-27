import RawOriginalPage from '@/components/rawOriginalPage';
import { metadataFor } from '@/data/seoData';

export const metadata = metadataFor('/testimonials');

export default function Page() {
  return <RawOriginalPage route="/testimonials" />;
}
