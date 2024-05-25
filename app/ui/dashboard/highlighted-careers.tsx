import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';

// This component is representational only.
// For data visualization UI, check out:
// https://www.tremor.so/
// https://www.chartjs.org/
// https://airbnb.io/visx/

export default async function HighlightedCareers() {
  const revenue = await fetchRevenue();
  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    console.log('revenue');
    console.log(revenue);

    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  const TEMPORARY_DELETE_LATER = [
    {
      career: 'Electrician1',
      salary: 40000,
    },
    {
      career: 'Electrician2',
      salary: 45000,
    },
    {
      career: 'Electrician3',
      salary: 50000,
    },
    {
      career: 'Electrician4',
      salary: 40000,
    },
    {
      career: 'Electrician5',
      salary: 50000,
    },
    {
      career: 'Electrician6',
      salary: 60000,
    },
    {
      career: 'Electrician7',
      salary: 70000,
    },
    {
      career: 'Electrician8',
      salary: 80000,
    },
    {
      career: 'Electrician9',
      salary: 90000,
    },
    {
      career: 'Electrician10',
      salary: 100000,
    },
    {
      career: 'Electrician11',
      salary: 110000,
    },
    {
      career: 'Electrician12',
      salary: 180000,
    },
  ];

  return (
    <div className="w-full md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Highlighted Careers
      </h2>
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="mt-0 grid grid-cols-12 items-end gap-2 rounded-md bg-white p-4 sm:grid-cols-13 md:gap-4">
          {/* y-axis */}
          <div
            className="mb-6 hidden flex-col justify-between text-sm text-gray-400 sm:flex"
            style={{ height: `${chartHeight}px` }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {TEMPORARY_DELETE_LATER.map((element) => (
            <div
              key={element.career}
              className="flex flex-col items-center gap-2"
            >
              {/* bars */}
              <div
                className="w-full rounded-md bg-blue-300"
                style={{
                  height: `${(chartHeight / topLabel) * element.salary}px`,
                }}
              ></div>
              {/* x-axis */}
              <p className="-rotate-90 text-sm text-gray-400 sm:rotate-0">
                {element.career}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
