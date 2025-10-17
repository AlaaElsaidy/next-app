"use client";
import { useEffect } from "react";
import Link from 'next/link';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    console.error("Global error caught:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-orange-400 font-sans p-6 sm:p-12">
      <div className="text-center space-y-8 max-w-xl bg-[#112240] border border-gray-700 rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow">
          Oops! Something went wrong...
        </h1>

        <p className="text-lg sm:text-xl text-orange-300">
          {error?.message || "An unexpected error occurred. Please try again."}
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          {reset && (
            <button
              onClick={() => reset()}
              className="px-6 py-3 bg-orange-400 text-[#0a192f] rounded-lg font-semibold hover:bg-orange-500 transition duration-300 shadow-lg"
            >
              Try Again
            </button>
          )}
          <Link href="/" className="btn">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
