import ProductDetails from "./productDetails"

// --- Fetch all products (for generateStaticParams)
async function getAllProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error("Failed to fetch products")
    return await res.json()
  } catch (error) {
    console.error("Error fetching all products:", error)
    return []
  }
}

// --- Fetch a single product by id
async function getSingleProduct(id) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error("Failed to fetch product")
    return await res.json()
  } catch (error) {
    console.error("Error fetching product:", error)
    return null
  }
}

// --- Build all static paths at build time
export async function generateStaticParams() {
  const products = await getAllProducts()
  return products.map((p) => ({ id: String(p.id) }))
}

// --- The actual page
export default async function ProductDetailsPage({ params }) {
  // validate params
  if (!params?.id)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-orange-400 font-medium text-lg">
        Product ID is missing.
      </div>
    )

  const product = await getSingleProduct(params.id)

  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a192f] text-orange-400 text-lg">
        Product not found or failed to load.
      </div>
    )

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-[#0a192f] text-orange-400 p-6 sm:p-10">
      <div className="w-full max-w-5xl bg-[#112240] border border-gray-700 rounded-2xl shadow-xl p-10">
        <ProductDetails product={product} />
      </div>
    </section>
  )
}