"use client";

import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

function Search() {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/search/${search}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={search}
        placeholder="Enter the search term"
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white font-bold py-2 rounded-lg px-4"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
