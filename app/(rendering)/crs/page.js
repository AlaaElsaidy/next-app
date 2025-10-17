"use client"
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4"> Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img
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
