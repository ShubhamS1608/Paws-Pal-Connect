"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function SearchBar() {
  const router = useRouter();
  const params = useSearchParams();

  const [value, setValue] = useState(params.get("species") || "");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/?species=${value}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-6 flex gap-3">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search species: dog, cat, bird"
        className="border p-2 rounded w-64"
      />
      <button className="bg-blue-500 text-white px-4 rounded">
        Search
      </button>
    </form>
  );
}
