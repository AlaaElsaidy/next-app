import React from "react";
import Link from "next/link";

// --- Fetch all products (ISR-enabled)
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-[#0a192f] to-gray-800 text-orange-400 py-16 px-6 sm:px-12">
      <h1 className="text-4xl font-bold text-center mb-12">Products</h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-[#112240] border border-gray-700 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-5 flex flex-col items-center text-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain rounded-lg mb-4 bg-[#0a192f]"
            />
            <h2 className="text-lg font-semibold text-white mb-2">
              {product.title}
            </h2>
            <p className="text-gray-300 mb-4 text-sm">${product.price}</p>
            <Link
              href={`/products/${product.id}`}
              className="inline-block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition font-medium shadow-md"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}