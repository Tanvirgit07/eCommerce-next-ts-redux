"use client";
import React, { useState } from "react";
import { RiCloseLine, RiSearchLine } from "react-icons/ri";

function SearchInput() {
  const [search, setSearch] = useState("");
  return (
    <div className="hidden md:inline-flex flex-1 h-10 relative">
      <input
        type="text"
        placeholder="Search products here..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="w-full h-full border-2 border-blue-500 px-4  outline-none"
      />
      {search && (
        <RiCloseLine onClick={() => setSearch("")} className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200" />
      )}
      <span className="w-10 h-10 bg-blue-500 inline-flex items-center justify-center text-white absolute top-0 right-0 cursor-pointer hover:bg-blue-600 duration-200">
        <RiSearchLine />
      </span>
    </div>
  );
}

export default SearchInput;
