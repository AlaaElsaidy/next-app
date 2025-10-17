import Image from 'next/image'
export default async function ProductsPage() {
  const res = await fetch('https://fakestoreapi.com/products', {
    cache: 'no-store', 
  });
  const products = await res.json();

  return (
    <div>
      <h1>Server-Side Rendered Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <Image
              src={product.image}
              alt={product.title}
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
            <p>{product.title}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
