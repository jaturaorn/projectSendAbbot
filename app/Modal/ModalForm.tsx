import { Dispatch, SetStateAction, useState } from "react";
import Layout from "./Layout";
import { Blog } from "../types/blog";
import Close from "../SVGS/Close";

const ModalForm = ({
  onCloseModal,
  handleAddNewBlog,
  title,
  setTitle,
  description,
  setDescription,
  author,
  setAuthor,
  status,
  setStatuses,
}: {
  onCloseModal: Dispatch<SetStateAction<string>>;
  handleAddNewBlog: (newBlog: Blog) => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  author: string;
  setAuthor: Dispatch<SetStateAction<string>>;
  status: string;
  setStatuses: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Layout>
      <div className="flex flex-col gap-5 w-full">
        <div className="w-full flex justify-between">
          <h3 className="text-2xl font-bold">Add new Blog</h3>
          <button className="" onClick={() => onCloseModal("")}>
            <Close width={24} height={24} className="" />
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="add Title ..."
            className="border border-[#E5E7EB] bg-white rounded-full px-5 py-2.5 flex-1 outline-none"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="add Description ..."
            className="border border-[#E5E7EB] bg-white rounded-full px-5 py-2.5 flex-1 outline-none"
          />
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="add Author ..."
            className="border border-[#E5E7EB] bg-white rounded-full px-5 py-2.5 flex-1 outline-none"
          />
          <div className="flex gap-4">
            <label className="px-2 flex gap-2">
              <input
                type="radio"
                value="public"
                checked={status === "public"}
                onChange={(e) => setStatuses(e.target.value)}
              />
              Public
            </label>
            <label className="px-2 flex gap-2">
              <input
                type="radio"
                value="unpublic"
                checked={status === "unpublic"}
                onChange={(e) => setStatuses(e.target.value)}
              />
              Unpublic
            </label>
          </div>
        </div>
        <div className="flex gap-2 w-full">
          <button
            className="buttonLogout text-white w-full"
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
              handleAddNewBlog({
                id: 0,
                title,
                description,
                author,
                status: status as "public" | "unpublic",
                createdDate: today,
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

export default ModalForm;
