"use client";

import { useState } from "react";

import blogsData from "@/app/mocks/blogs.json";

import Card from "./Components/Card";
import Search from "./Components/Search";
import MainLayout from "./MainLayout";
import { Blog } from "./types/blog";
import { useGlobalContext } from "./State/Global";

export default function Home() {
  const [blogs, setBlogs] = useState(blogsData as Blog[]);
  const [filterCategory, setFilterCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [statuses, setStatuses] = useState("");
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [createdDate, setCreatedDate] = useState("");
  const [updatedDate, setUpdatedDate] = useState("");

  const { setOpenmodal } = useGlobalContext()!;

  const filteredBlogs = blogs.filter((blogs) => {
    const matchCategory =
      filterCategory === "all" || blogs.status === filterCategory;
    const matchSearch = blogs.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  const handleAddNewBlog = (newBlog: Blog) => {
    const blogWithId = {
      ...newBlog,
      id: Math.max(...blogs.map((b) => b.id)) + 1,
    };
    setBlogs([...blogs, blogWithId]);
    setOpenmodal("");
  };

  const handleDeleteBlog = (blogid: number) => {
    const updateedBlogs = blogs.filter((blog) => blog.id !== blogid);
    setBlogs(updateedBlogs);
  };

  const handleEditBlog = (blog: Blog) => {
    setEditingBlog(blog);
    setOpenmodal("editForm");
  };

  const handleSaveEditBlog = (updatedBlog: Blog) => {
    const updateBlogs = blogs.map((blog) =>
      blog.id === updatedBlog.id ? updatedBlog : blog
    );
    setBlogs(updateBlogs);
    setOpenmodal("");
    setEditingBlog(null);
  };

  return (
    <MainLayout
      handleAddNewBlog={handleAddNewBlog}
      onSaveEdit={handleSaveEditBlog}
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      author={author}
      setAuthor={setAuthor}
      status={statuses}
      setStatuses={setStatuses}
      createdDate={createdDate}
      setCreatedDate={setCreatedDate}
      updatedDate={updatedDate}
      setUpdatedDate={setUpdatedDate}
      blog={editingBlog}
    >
      <h1 className="heading">Blog Management Dashboard</h1>
      <Search
        onSearch={setSearchQuery}
        searchQuery={searchQuery}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
      <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => (
            <Card
              key={blog.id}
              blog={blog}
              onEdit={handleEditBlog}
              onDelete={handleDeleteBlog}
            />
          ))
        ) : (
          <p className="text-center text-gray-500">NO DATA Blog</p>
        )}
      </div>
    </MainLayout>
  );
}
