//client/src/components/ProductGrid.tsx


import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../utils/api';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  category: string;
}


const ProductGrid: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sortOrder, setSortOrder] = useState<string>('none');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getAllProducts();

        // Handle both types of response (array or object with products array)
        const allProducts: Product[] = Array.isArray(result)
          ? result
          : result.products;

        if (!Array.isArray(allProducts)) {
          throw new Error('Invalid product data format received from API.');
        }

        setProducts(allProducts);
        setFiltered(allProducts);

        const categorySet: Set<string> = new Set(allProducts.map(p => p.category));
        setCategories(['All', ...Array.from(categorySet)]);

        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching products:', err);
        setError('Failed to fetch products.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);


  useEffect(() => {
    let temp = [...products];
    // Category filter
  if (selectedCategory !== 'All') {
    temp = temp.filter(p => p.category === selectedCategory);
  }

  // Search filter
  if (searchQuery.trim() !== '') {
    temp = temp.filter(p =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sorting
  if (sortOrder === 'asc') {
    temp.sort((a, b) => a.price - b.price);
  } else if (sortOrder === 'desc') {
    temp.sort((a, b) => b.price - a.price);
  }

  setFiltered(temp);
}, [selectedCategory, sortOrder, searchQuery, products]);


  if (loading) return <div className="text-center text-lg p-10">🔄 Loading products...</div>;
  if (error) return <div className="text-center text-red-500 text-lg p-10">❌ {error}</div>;

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen">
      <SearchBar onSearch={setSearchQuery} />

      <div className="flex gap-4 mb-8 flex-wrap justify-center items-center">
        <select
          className="px-4 py-2 rounded-lg shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 rounded-lg shadow border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="none">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>

        <button
    onClick={() => {
      setSelectedCategory('All');
      setSortOrder('none');
      setSearchQuery('');
    }}
    className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
    title="Reset All Filters"
  >
    Reset All Filters
  </button>

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.title}
            description={product.description}
            price={product.price}
            image={product.thumbnail}
            category={product.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
