import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-orange-400 font-sans">
      <div className="text-center space-y-6 animate-pulse">
        <div className="flex justify-center">
          <div className="w-10 h-10 border-4 border-orange-400 border-t-transparent rounded-full animate-spin"></div>
        </div>

        <h2 className="text-3xl font-extrabold drop-shadow-sm">
          Loading...
        </h2>
      </div>
    </div>
  )
}