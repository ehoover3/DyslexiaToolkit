'use client';

import React, { useState } from 'react';
import { lusitana } from '@/app/ui/fonts';
import { AudioBook } from '@/app/lib/definitions';
import { getAudioBooks } from '@/app/lib/data';
import Modal from './modal';
import Search from './search';

export default function Table() {
  const books = getAudioBooks();
  const [selectedBook, setSelectedBook] = useState<AudioBook | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredBooks, setFilteredBooks] = useState(books);

  const handleBookClick = (book: AudioBook) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleSearch = (query: string) => {
    if (query === '') setFilteredBooks(books);
    const lowerCaseQuery = query.toLowerCase();
    let filteredBooks = books.filter(
      (book: AudioBook) =>
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery),
    );
    setFilteredBooks(filteredBooks);
  };

  return (
    <div className="w-full">
      <h1 className={`${lusitana.className} mb-8 text-xl lg:text-2xl`}>
        Audio Books
      </h1>
      <Search placeholder="Search audio books..." handleSearch={handleSearch} />
      <div className="mt-6 flow-root">
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-md bg-gray-50 p-2 lg:pt-0">
              <div className="lg:hidden">
                {filteredBooks?.map((book) => (
                  <div
                    key={book.id}
                    className="mb-2 w-full cursor-pointer rounded-md bg-white p-4 hover:bg-blue-200"
                  >
                    <div className="flex w-full items-center justify-between">
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Title</p>
                        <p className="font-medium">{book.title}</p>
                      </div>
                      <div className="flex w-1/2 flex-col">
                        <p className="text-xs">Author</p>
                        <p className="font-medium">{book.author}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <table className="hidden min-w-full rounded-md text-gray-900 lg:table">
                <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
                  <tr>
                    <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                      Title
                    </th>
                    <th scope="col" className="px-3 py-5 font-medium">
                      Author
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 text-gray-900">
                  {filteredBooks.map((book) => (
                    <tr
                      key={book.id}
                      className="group cursor-pointer bg-white hover:bg-blue-200"
                      onClick={() => handleBookClick(book)}
                    >
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {book.title}
                      </td>
                      <td className="whitespace-nowrap px-4 py-5 text-sm">
                        {book.author}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && selectedBook && (
        <Modal selectedBook={selectedBook} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}
