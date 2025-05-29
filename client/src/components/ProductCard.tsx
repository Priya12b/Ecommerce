//client/src/components/ProductCard.tsx

import React from 'react';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';
import { useEffect,useState } from 'react';

interface Props {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ id, name, description, price, image, category }: Props) => {
  const { addToCart } = useCart();

 const [isFavorite, setIsFavorite] = useState(false);

  // Load favorite status on mount
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setIsFavorite(favorites.some((item: any) => item.id === id));
  }, [id]);

  // Toggle favorite
  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    let updatedFavorites;
    if (isFavorite) {
      updatedFavorites = favorites.filter((item: any) => item.id !== id);
    } else {
      updatedFavorites = [...favorites, { id, name, description, price, image }];
    }
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setIsFavorite(!isFavorite);
  };





  const handleAddToCart = () => {
    alert(`${name} added to cart!`);
    addToCart({ id, name, price, image, category });
  };

  const handleView = () => {
    const history = JSON.parse(localStorage.getItem('viewHistory') || '[]');
    const updatedHistory = [{ id, name, image, category }, ...history.filter((item: any) => item.id !== id)];
    localStorage.setItem('viewHistory', JSON.stringify(updatedHistory.slice(0, 10)));
  };

  useEffect(() => {
    handleView(); // run once when product renders
  }, []);


  return (
    <div className="bg-white p-4 rounded-lg shadow hover:scale-105 transition relative">
       <button
        className="absolute top-2 left-2 text-2xl"
        onClick={toggleFavorite}
      >
        {isFavorite ? '❤️' : '♡'}
      </button>
      <img src={image} alt={name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 text-lg font-bold">{name}</h3>
      <p className="text-sm text-gray-600">{description}</p>
      <p className="mt-1 text-blue-600 font-semibold">${price}</p>
      <button
        onClick={handleAddToCart}
        className="mt-3 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
