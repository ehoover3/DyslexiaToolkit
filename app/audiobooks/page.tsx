import { Metadata } from 'next';
import Table from '@/app/ui/audiobooks/table';

export const metadata: Metadata = {
  title: 'Audio Books',
};

export default async function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <main>
          <Table />
        </main>
      </div>
    </div>
  );
}
