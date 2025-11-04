import { Dispatch, SetStateAction, useEffect } from "react";
import Close from "../SVGS/Close";
import Layout from "./Layout";
import { Blog } from "../types/blog";

interface props {
  // handleAddNewBlog: (newBlog: Blog) => void;
  onSaveEdit: (updatedBlog: Blog) => void;
  onCloseModal: Dispatch<SetStateAction<string>>;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  author: string;
  setAuthor: Dispatch<SetStateAction<string>>;
  status: string;
  setStatuses: Dispatch<SetStateAction<string>>;
  blog: Blog | null;
  createdDate: string;
  setCreatedDate: Dispatch<SetStateAction<string>>;
  updatedDate: string;
  setUpdatedDate: Dispatch<SetStateAction<string>>;
}

const ModalEdit = ({
  onCloseModal,
  onSaveEdit,
  blog,
  setTitle,
  setDescription,
  setAuthor,
  setStatuses,
  title,
  description,
  author,
  status,
  createdDate,
  setCreatedDate,
  updatedDate,
  setUpdatedDate,
}: props) => {
  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setDescription(blog.description);
      setAuthor(blog.author);
      setStatuses(blog.status);
      setCreatedDate(blog.createdDate);
    }
  }, [blog]);

  if (!blog) return null;
  return (
    <Layout>
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full flex justify-between">
          <h3 className="text-2xl font-bold">Edit Blog</h3>
          <button className="" onClick={() => onCloseModal("")}>
            <Close width={24} height={24} className="" />
          </button>
        </div>
        {/* Form */}
        <div className="w-full flex flex-col gap-4">
          {/* Title */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Title *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title..."
              className="border border-[#E5E7EB] bg-white rounded-lg px-4 py-2.5 outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Description *</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description..."
              rows={3}
              className="border border-[#E5E7EB] bg-white rounded-lg px-4 py-2.5 outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 resize-none"
            />
          </div>

          {/* Author */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Author *</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Enter author..."
              className="border border-[#E5E7EB] bg-white rounded-lg px-4 py-2.5 outline-none focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Status *</label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="public"
                  checked={status === "public"}
                  onChange={(e) =>
                    setStatuses(e.target.value as "public" | "unpublic")
                  }
                />
                <span>Public</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  value="unpublic"
                  checked={status === "unpublic"}
                  onChange={(e) =>
                    setStatuses(e.target.value as "public" | "unpublic")
                  }
                />
                <span>Unpublic</span>
              </label>
            </div>
          </div>

          {/* Created Date (Disabled) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Created Date</label>
            <input
              type="date"
              value={createdDate}
              disabled
              className="border border-[#E5E7EB] bg-gray-100 rounded-lg px-4 py-2.5 outline-none cursor-not-allowed text-gray-500"
            />
          </div>

          {/* Updated Date (Auto-fill) */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold">Updated Date</label>
            <input
              type="date"
              value={new Date().toISOString().split("T")[0]}
              disabled
              className="border border-[#E5E7EB] bg-gray-100 rounded-lg px-4 py-2.5 outline-none cursor-not-allowed text-gray-500"
            />
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <button
            className="bg-[#6B7280] px-5 py-2.5 rounded-full text-white w-full"
            onClick={() => onCloseModal("")}
          >
            Cancel
          </button>
          <button
            className="mainButton w-full"
            onClick={() => {
              if (!title || !description || !author || !status) {
                alert("Please fill in all information.");
                return;
              }
              const today = new Date().toISOString().split("T")[0];
              onSaveEdit({
                id: blog!.id,
                title,
                description,
                author,
                status: status as "public" | "unpublic",
                createdDate: createdDate,
                updatedDate: today,
              });
            }}
          >
            Save
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ModalEdit;
