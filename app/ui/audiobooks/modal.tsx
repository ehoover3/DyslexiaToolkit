'use client';

import React from 'react';
import { AudioBook } from '@/app/lib/definitions';

interface ModalProps {
  selectedBook: AudioBook;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Modal({ selectedBook, setIsModalOpen }: ModalProps) {
  const handleConfirm = () => {
    if (selectedBook) {
      window.location.href = selectedBook.url;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="rounded-md bg-white p-6 shadow-md">
        <p className="mb-4">
          <div style={{ fontWeight: 'bold' }}>
            You are leaving this website. Do you want to continue?
          </div>
          The content, privacy policies, and security measures of the external
          site may differ from this website. We are not responsible for and do
          not endorse or guarantee the accuracy, reliability, or suitability of
          the information and materials contained on the external site. By
          proceeding, you acknowledge that you understand and accept these
          terms.
        </p>
        <button
          className="mr-2 rounded bg-blue-500 px-4 py-2 text-white"
          onClick={handleConfirm}
        >
          OK
        </button>
        <button
          className="rounded bg-gray-500 px-4 py-2 text-white"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
