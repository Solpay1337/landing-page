import React from 'react';
import videoSrc from '../../1fps.mp4';

function Cta() {
  const FormUrl = 'https://forms.gle/o7QQkhuxuubFep4RA'; // Replace with your form URL

  return (
    <div className="relative bg-[#00001a] text-white p-4 border border-gray-500 rounded-xl m-2 md:m-4 flex-1 flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
      ></video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full text-center pb-20 md:pb-0">
        <a
          href={FormUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#00001a] hover:bg-yellow-600 text-white py-2 px-6 rounded-lg shadow-lg transition duration-300"
        >
          Join the waitlist
        </a>
      </div>
    </div>
  );
}

export default Cta;
