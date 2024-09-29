import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center relative w-full md:w-1/2">
      <input
        type="text"
        className="w-full border border-gray-300 rounded-sm py-2 px-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Search for your favourite movie"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <FaSearch className="absolute left-3 top-3 text-gray-400" />
    </div>
  );
};

export default SearchBar;
