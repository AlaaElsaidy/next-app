import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a192f] text-orange-400 font-sans px-6 sm:px-12 py-20">
      <div className="text-center space-y-10 max-w-3xl mx-auto mt-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg">
          Welcome Home
        </h1>

        <p className="text-lg sm:text-xl text-orange-300 leading-relaxed">
          Explore our store and discover unique products that fit your lifestyle.
        </p>

        <Link
          href="/products"
          className="inline-block mt-6 px-8 py-3 bg-orange-400 text-[#0a192f] font-semibold rounded-lg shadow-md hover:bg-orange-500 transition-all duration-300"
        >
          Browse Products
        </Link>
      </div>
    </div>
  )
}