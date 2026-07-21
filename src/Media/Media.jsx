import React from "react";
import pic from "../assets/Media/1.jpeg";

function Media() {
  return (
    <section
      id="media"
      className="flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 md:px-16 py-14 sm:py-20 bg-[#FAFAF8]"
    >
      {/* Eyebrow + Heading */}
      <div className="mb-10 sm:mb-14 text-center">
        <span className="text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase text-[#C9A227] font-semibold">
          In the Press
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1B4332]">
          Featured
        </h1>
        <div className="mt-4 mx-auto h-[2px] w-14 bg-[#C9A227]" />
      </div>

      {/* Main Card */}
      <div className="group relative bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-shadow duration-300 p-6 sm:p-8 md:p-14 flex flex-col md:flex-row items-center md:items-start w-full max-w-7xl text-center md:text-left gap-6 sm:gap-10 md:gap-16 border border-[#EDEDE8]">

        {/* Left Image */}
        <div className="relative shrink-0">
          <img
            src={pic}
            alt="Usama Badar"
            className="rounded-xl w-40 h-40 xs:w-48 xs:h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 object-cover ring-1 ring-[#1B4332]/10"
          />
          <span className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 bg-[#1B4332] text-[#C9A227] text-[10px] sm:text-xs tracking-wide uppercase font-semibold px-3 py-1.5 sm:px-4 sm:py-2 rounded-full shadow-md">
            Featured
          </span>
        </div>

        {/* Right Content */}
        <div className="flex flex-col justify-center w-full md:pt-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1B4332] leading-snug">
            Nearpeer's{" "}
            <span className="bg-[#C9A227]/15 text-[#8a6d15] px-2 py-0.5 rounded-md inline-block">
              CAF
            </span>{" "}
            Qualified Star
          </h2>

          <h3 className="mt-3 text-base sm:text-lg md:text-xl font-medium text-gray-600">
            Usama Badar
          </h3>

          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-500 leading-relaxed max-w-md mx-auto md:mx-0">
            Featured in CA Online by Nearpeer.
            <br />
            Apni manzil ki taraf rawan dawan 🥰😇
          </p>
          <a
            href="https://www.facebook.com/watch/?v=634959834358652"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 mt-6 sm:mt-8 w-full sm:w-fit mx-auto md:mx-0 bg-[#1B4332] text-white text-sm font-medium py-3 px-6 sm:px-8 rounded-md transition-all duration-200 hover:bg-[#143526] hover:gap-3"
          >
            View Feature
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Media;