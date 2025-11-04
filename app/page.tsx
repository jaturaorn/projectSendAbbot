"use client";

import { useState } from "react";

import blogsData from "@/app/mocks/blogs.json";

import Card from "./Components/Card";
import Search from "./Components/Search";
import MainLayout from "./MainLayout";
import { Blog } from "./types/blog";

export default function Home() {
  const [blogs, setBlogs] = useState(blogsData as Blog[]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blogs) => {
    const matchCategory =
      filterCategory === "all" || blogs.status === filterCategory;
    const matchSearch = blogs.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });
  return (
    <MainLayout>
      <h1 className="heading">Blog Management Dashboard</h1>
      <Search
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <Card key={blog.id} blog={blog} />)
        ) : (
          <p className="text-center text-gray-500">NO DATA Blog</p>
        )}
      </div>
    </MainLayout>
  );
}
