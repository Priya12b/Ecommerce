// //client/src/components/Navbar.tsx

// import { Link } from 'react-router-dom';
// import { useCart } from '../context/CartContext';

// const Navbar: React.FC = () => {
//   const { cartItems } = useCart();
//   const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

//   return (
//     <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
//       <div className="text-2xl font-bold cursor-pointer">
//         <Link to="/">Eclypse</Link>
//       </div>

//       <ul className="hidden md:flex space-x-8 text-lg">
//         <li className="hover:text-purple-400 cursor-pointer">
//           <Link to="/">Home</Link>
//         </li>
//         <li className="hover:text-purple-400 cursor-pointer">
//           <Link to="/shop">Shop</Link>
//         </li>
//         <li className="hover:text-purple-400 cursor-pointer">
//           <Link to="/about">About</Link>
//         </li>
//         <li className="hover:text-purple-400 cursor-pointer">
//           <Link to="/contact">Contact</Link>
//         </li>
//         <li className="hover:text-purple-400 cursor-pointer">
//           <Link to="/favorites">Favorites</Link>
//         </li>
//         <li className="relative hover:text-purple-400 cursor-pointer">
//           <Link to="/cart">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6 inline-block text-purple-400"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth={2}
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
//               <circle cx="7" cy="21" r="2" />
//               <circle cx="17" cy="21" r="2" />
//             </svg>
//             {totalItems > 0 && (
//               <span className="absolute -top-2 -right-2 bg-purple-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
//                 {totalItems}
//               </span>
//             )}
//           </Link>
//         </li>
//       </ul>

//       <div className="md:hidden cursor-pointer">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-8 w-8"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           strokeWidth={2}
//         >
//           <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
//         </svg>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold cursor-pointer">
        <Link to="/">Eclypse</Link>
      </div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li className="hover:text-purple-400 cursor-pointer">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:text-purple-400 cursor-pointer">
          <Link to="/favorites">Favorites</Link>
        </li>
        <li className="relative hover:text-purple-400 cursor-pointer">
          <Link to="/cart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 inline-block text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
              <circle cx="7" cy="21" r="2" />
              <circle cx="17" cy="21" r="2" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-purple-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </li>
      </ul>

      {/* Mobile hamburger button */}
      <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </div>

      {/* Mobile menu (show when menuOpen) */}
      {menuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col space-y-2 p-4 md:hidden z-50">
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => setMenuOpen(false)}>
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => setMenuOpen(false)}>
            <Link to="/shop">Shop</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => setMenuOpen(false)}>
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => setMenuOpen(false)}>
            <Link to="/contact">Contact</Link>
          </li>
          <li className="hover:text-purple-400 cursor-pointer" onClick={() => setMenuOpen(false)}>
            <Link to="/favorites">Favorites</Link>
          </li>
          <li className="relative hover:text-purple-400 cursor-pointer" onClick={() => setMenuOpen(false)}>
            <Link to="/cart" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
                <circle cx="7" cy="21" r="2" />
                <circle cx="17" cy="21" r="2" />
              </svg>
              {totalItems > 0 && (
                <span className="bg-purple-500 rounded-full text-xs w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
              Cart
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
