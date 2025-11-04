"use client";

import { ChevronDown, RotateCcw } from "lucide-react";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useGlobalContext } from "../State/Global";

interface SearchProps {
  onSearch: Dispatch<SetStateAction<string>>;
  filterCategory: string;
  setFilterCategory: Dispatch<SetStateAction<string>>;
  searchQuery: string;
}

const Search = ({
  onSearch,
  filterCategory,
  setFilterCategory,
  searchQuery,
}: SearchProps) => {
  const { openmodal, setOpenmodal } = useGlobalContext()!;

  const handleReset = () => {
    onSearch("");
    setFilterCategory("all");
  };
  return (
    <div className="w-full flex gap-3 items-center">
      <input
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        type="text"
        className="input"
        placeholder="Search..."
      />
      <select
        className="px-4 py-2 rounded-lg borber border-[#E5E7EB] outline-none"
        value={filterCategory}
        onChange={(e) => setFilterCategory(e.target.value)}
      >
        <option value="all">All</option>
        <option value="public">Public</option>
        <option value="unpublic">Unpublic</option>
      </select>
      <button className="mainButton" onClick={() => setOpenmodal("addForm")}>
        Add New Blog
      </button>
      <button
        className="borber border-[#E5E7EB] px-4 py-2 rounded-lg"
        onClick={handleReset}
      >
        <RotateCcw />
      </button>
    </div>
  );
};

export default Search;
