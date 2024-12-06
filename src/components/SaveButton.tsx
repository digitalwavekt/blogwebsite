import React, { useState } from 'react';

interface SaveButtonProps {
  blogId: string;
  isSaved: boolean;
}

export default function SaveButton({ blogId, isSaved: initialSaved }: SaveButtonProps) {
  const [isSaved, setIsSaved] = useState(initialSaved);

  const handleSave = async () => {
    try {
      const response = await fetch('/api/blogs/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogId })
      });
      
      if (response.ok) {
        setIsSaved(!isSaved);
      }
    } catch (error) {
      console.error('Error saving blog:', error);
    }
  };

  return (
    <button
      onClick={handleSave}
      className={`flex items-center space-x-1 px-3 py-1 rounded-md ${
        isSaved ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
      }`}
    >
      <svg
        className="w-5 h-5"
        fill={isSaved ? 'currentColor' : 'none'}
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
        />
      </svg>
      <span>{isSaved ? 'Saved' : 'Save for later'}</span>
    </button>
  );
}