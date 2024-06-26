import DyslexiaSimulationCard from '@/app/ui/home/dylexia-simulation';
import OpenDyslexicFontCard from '@/app/ui/home/open-dyslexic-font';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/home/cards';

import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <DyslexiaSimulationCard />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <OpenDyslexicFontCard />
        </Suspense>
      </div>
    </main>
  );
}
