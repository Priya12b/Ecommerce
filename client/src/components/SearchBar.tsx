//client/src/components/SearchBar.tsx


// import { useState } from "react";

// interface Props {
//   onSearch: (query: string) => void;
// }

// const SearchBar = ({ onSearch }: Props) => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     onSearch(query);
//   };

//   return (
//     <div className="flex justify-center my-6">
//       <input
//         type="text"
//         placeholder="Search products..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="px-4 py-2 border border-gray-300 rounded-l-lg w-60"
//       />
//       <button
//         onClick={handleSearch}
//         className="bg-purple-500 text-white px-4 rounded-r-lg hover:bg-purple-600"
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;
import { useState, useEffect } from "react";
import { X } from "lucide-react"; // optional, for a nice clear (X) icon

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState("");

  // 🔁 Update parent every time input changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 300); // debounce 300ms

    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery("");
    onSearch(""); // reset filtered list
  };

  return (
    <div className="flex justify-center items-center gap-2 my-6">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-lg w-60 shadow-sm focus:outline-purple-400"
      />
      {query && (
        <button
          onClick={handleClear}
          className="text-gray-500 hover:text-red-500"
          title="Clear"
        >
          <X size={20} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
