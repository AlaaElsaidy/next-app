'use client'
import Image from 'next/image'

export default function ProductDetails({ product }) {
  if (!product) {
    return (
      <div className="p-8 text-center text-orange-400 bg-[#0a192f]">
        No product data.
      </div>
    )
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a192f] py-16 px-4 sm:px-10 text-orange-400">
      <div
        key={product.id}
        className="w-full max-w-6xl mx-auto bg-[#112240] border border-gray-700 rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden"
      >
        {/* IMAGE SECTION */}
        <div className="md:w-1/2 flex items-center justify-center bg-[#0a192f]">
          <div className="relative w-full h-96 sm:h-[28rem] p-6 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'contain' }}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* DETAILS SECTION */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-6">
          <h1 className="text-3xl font-extrabold text-orange-400 tracking-tight">
            {product.title}
          </h1>

          <div className="flex items-center gap-3">
            <p className="text-2xl font-semibold text-orange-400">
              ${product.price}
            </p>
            {product.rating && (
              <p className="text-yellow-400 font-semibold">
                ⭐ {product.rating.rate} ({product.rating.count})
              </p>
            )}
          </div>

          <p className="text-orange-300 text-lg leading-relaxed">
            {product.description}
          </p>

          <div className="flex gap-4 pt-4">
            <button className="px-5 py-3 bg-orange-400 text-[#0a192f] font-semibold rounded-lg hover:bg-orange-500 transition-colors shadow">
              Add to Cart
            </button>
            <button className="px-5 py-3 border border-orange-400 text-orange-400 font-semibold rounded-lg hover:bg-orange-400 hover:text-[#0a192f] transition-colors shadow-sm">
              Add to Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}