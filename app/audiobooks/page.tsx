import { lusitana } from '@/app/ui/fonts';
import { fetchCollegesPages } from '@/app/lib/data';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Audio Books',
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Audio Books</h1>
      </div>
    </div>
  );
}
