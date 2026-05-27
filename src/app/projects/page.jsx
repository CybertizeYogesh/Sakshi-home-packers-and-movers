import RawOriginalPage from '@/components/rawOriginalPage';
import { metadataFor } from '@/data/seoData';

export const metadata = metadataFor('/projects');

export default function Page() {
  return <RawOriginalPage route="/projects" />;
}
