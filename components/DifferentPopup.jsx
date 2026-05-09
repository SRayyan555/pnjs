import { useState } from 'react';

export default function DifferentPopup({ isOpen, onClose, professor }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white h-[550px] w-[800px] rounded-[30px] p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>
        <div className="h-full flex flex-col">
          <h2 className="text-3xl font-bold mb-4">{professor}</h2>
          <p className="text-gray-600">
            Professor details and information will go here.
          </p>
        </div>
      </div>
    </div>
  );
}
