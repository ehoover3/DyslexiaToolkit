import HighlightedCareers from '@/app/ui/dashboard/highlighted-careers';
import ExamplePlans from '@/app/ui/dashboard/example-plans';
import { lusitana } from '@/app/ui/fonts';
import { fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import CardWrapper from '@/app/ui/dashboard/cards';

import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

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
          <HighlightedCareers />
        </Suspense>
        <Suspense fallback={<LatestInvoicesSkeleton />}>
          <ExamplePlans />
        </Suspense>
      </div>
    </main>
  );
}
