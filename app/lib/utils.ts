// export const generatePagination = (currentPage: number, totalPages: number) => {
//   if (totalPages === 1) {
//     return [1];
//   }

//   const pages: (number | string)[] = [];
//   const maxVisiblePages = 5;
//   const delta = Math.floor(maxVisiblePages / 2);

//   let startPage = Math.max(2, currentPage - delta);
//   let endPage = Math.min(totalPages - 1, currentPage + delta);

//   if (currentPage - 1 <= delta) {
//     endPage = Math.min(totalPages - 1, maxVisiblePages);
//   }

//   if (totalPages - currentPage <= delta) {
//     startPage = Math.max(2, totalPages - maxVisiblePages + 1);
//   }

//   pages.push(1);

//   if (startPage > 2) {
//     pages.push(`...`);
//   }

//   for (let i = startPage; i <= endPage; i++) {
//     pages.push(i);
//   }

//   if (endPage < totalPages - 1) {
//     pages.push(`...`);
//   }

//   pages.push(totalPages);
//   console.log('PAGES: ', pages);

//   return pages;
// };

export const generatePagination = (currentPage: number, totalPages: number) => {
  if (totalPages === 1) {
    return [1];
  }

  const pages: (number | string)[] = [];
  const maxVisiblePages = 5;
  const delta = Math.floor(maxVisiblePages / 2);

  let startPage = Math.max(2, currentPage - delta);
  let endPage = Math.min(totalPages - 1, currentPage + delta);

  if (currentPage - 1 <= delta) {
    endPage = Math.min(totalPages - 1, maxVisiblePages);
  }

  if (totalPages - currentPage <= delta) {
    startPage = Math.max(2, totalPages - maxVisiblePages + 1);
  }

  pages.push(1);

  if (startPage > 2) {
    pages.push('ellipsis-start'); // Unique key
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  if (endPage < totalPages - 1) {
    pages.push('ellipsis-end'); // Unique key
  }

  pages.push(totalPages);

  // Remove the ellipsis if the number 2 follows it directly
  if (pages[2] === 2) {
    pages.splice(1, 1); // Remove the second element
  }

  return pages;
};
