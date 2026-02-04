import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-gradient-to-r from-black to-gray-900 text-white px-6 py-4 flex flex-col sm:flex-row items-center justify-between shadow-lg">
      
      {/* Logo */}
      <h1 className="text-2xl font-extrabold tracking-wide">
        ⚡ Tech<span className="text-blue-400">Blog</span>
      </h1>

      {/* Search Box */}
      <div className="mt-3 sm:mt-0 relative w-full sm:w-72">
        <input
          className="w-full px-4 py-2 rounded-full bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search articles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="absolute right-4 top-2 text-gray-400">🔍</span>
      </div>
    </header>
  );
}
