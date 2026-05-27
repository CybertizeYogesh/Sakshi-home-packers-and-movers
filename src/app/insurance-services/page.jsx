import RawOriginalPage from '@/components/rawOriginalPage';
import { metadataFor } from '@/data/seoData';

export const metadata = metadataFor('/insurance-services');

export default function Page() {
  return <RawOriginalPage route="/insurance-services" />;
}
