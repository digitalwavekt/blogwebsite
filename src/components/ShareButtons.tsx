import React from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const shareUrls = {
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
  };

  return (
    <div className="flex space-x-2">
      {Object.entries(shareUrls).map(([platform, shareUrl]) => (
        <a
          key={platform}
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full hover:bg-gray-100"
        >
          <img
            src={`/icons/${platform}.svg`}
            alt={`Share on ${platform}`}
            className="w-5 h-5"
          />
        </a>
      ))}
    </div>
  );
}