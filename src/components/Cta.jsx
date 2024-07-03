import React from 'react';
import videoSrc from '../../1fps.mp4'; 
function Cta() {
  const TypeFormUrl = 'https://forms.gle/o7QQkhuxuubFep4RA'; // Replace with your Airtable form URL

  return (
    <div className="relative bg-[#00001a] text-white p-4 flex-1 border border-gray-500 rounded-xl m-1 overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
      ></video>

      {/* Content Overlay */}
      <div className="absolute inset-x-0 bottom-1/4 flex flex-col items-center justify-center text-center">
        <a
          href={TypeFormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00001a] hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Join the waitlist
        </a>
      </div>
    </div>
  );
}

export default Cta;
