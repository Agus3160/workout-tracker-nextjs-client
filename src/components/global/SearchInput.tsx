import { Search } from "lucide-react";
import React from "react";

type Props = {};

export default function SearchInput({}: Props) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        id="Search"
        placeholder="Search for..."
        className="w-full bg-zinc-800 outline-none border-none focus:ring-1 text-slate-200 focus:ring-orange-500 rounded-md p-2 shadow-sm sm:text-sm"
      />
      <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
        <button type="button" className="text-gray-600 hover:text-slate-600">
          <span className="sr-only">Search</span>
          <Search />
        </button>
      </span>
    </div>
  );
}
