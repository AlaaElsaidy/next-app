import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-orange-400 font-sans p-6 sm:p-12">
      <div className="text-center space-y-8 max-w-lg">
        <h1 className="text-7xl font-extrabold drop-shadow-lg">404</h1>

        <h2 className="text-3xl sm:text-4xl font-semibold">
          Oops! Page Not Found
        </h2>

        <p className="text-lg sm:text-xl text-orange-300">
          The page you’re looking for doesn’t exist, has been moved, or is temporarily unavailable.
        </p>

        <a
          href="/"
          className="inline-block mt-6 px-6 py-3 bg-orange-400 text-[#0a192f] rounded-lg font-semibold shadow-md hover:bg-orange-500 transition-all duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}