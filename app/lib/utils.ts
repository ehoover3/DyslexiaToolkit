import { Revenue } from './definitions';

export const formatCurrencyToNearestCent = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatCurrencyToNearestDollar = (amount: number) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
};

export const formatDateToLocal = (
  dateStr: string,
  locale: string = 'en-US',
) => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

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

export const generateYAxis = (revenue: Revenue[]) => {
  // Calculate what labels we need to display on the y-axis
  // based on highest record and in 1000s
  const yAxisLabels = [];
  const highestRecord = Math.max(
    ...TEMPORARY_DELETE_LATER.map((element) => element.salary),
  );
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  for (let i = topLabel; i >= 0; i -= 25000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage: number, totalPages: number) => {
  // If the total number of pages is 7 or less,
  // display all pages without any ellipsis.
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // If the current page is among the first 3 pages,
  // show the first 3, an ellipsis, and the last 2 pages.
  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  // If the current page is among the last 3 pages,
  // show the first 2, an ellipsis, and the last 3 pages.
  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  // If the current page is somewhere in the middle,
  // show the first page, an ellipsis, the current page and its neighbors,
  // another ellipsis, and the last page.
  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};
