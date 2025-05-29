//client/src/components/Recommendations.tsx

import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { getAllProducts } from '../utils/api'; 

const Recommendations = () => {
  const [recommended, setRecommended] = useState<any[]>([]);
   const { addToCart } = useCart();

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('viewHistory') || '[]');
    const fetchAndFilter = async () => {
      const allProducts = await getAllProducts();
      const categories = history.map((item: any) => item.category);
      const uniqueCats = [...new Set(categories)];
      const recs = allProducts.filter(
        (item: any) => uniqueCats.includes(item.category)
      ).slice(0, 6);
      setRecommended(recs);
    };
    fetchAndFilter();
  }, []);

  if (!recommended.length) return null;

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {recommended.map(product => (
          <div key={product.id} className="bg-white p-4 rounded shadow">
            <img src={product.thumbnail} className="h-32 object-cover w-full" />
            <h3 className="mt-2 font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.description}</p>
            <p className="text-blue-600 font-bold">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-2 bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
