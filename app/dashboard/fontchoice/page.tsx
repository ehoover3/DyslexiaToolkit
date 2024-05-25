import { Metadata } from 'next';
import Main from '@/app/ui/fontchoice/main';

export const metadata: Metadata = {
  title: 'Plan',
};

export default async function Page() {
  return <Main />;
}
