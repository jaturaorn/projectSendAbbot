import { Pencil, Trash2 } from "lucide-react";
import { CardProps } from "../types/blog";

const Card = ({ blog, onDelete, onEdit }: CardProps) => {
  return (
    <div className="shadow-md rounded-lg bg-[#F3F4F6] p-4 flex flex-col gap-3">
      <div className="w-full flex justify-between ">
        <h3 className="text-2xl text-[#1F2937] font-bold truncate">
          {blog.title}
        </h3>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg">Author: {blog.author}</h4>
        <h4 className="text-lg">{blog.description}</h4>
      </div>
      <div className="flex gap-2 items-center justify-between">
        <h4 className="text-lg">Updated: {blog.updatedDate}</h4>
        <div className="flex gap-2">
          <button
            className="border border-[#E5E7EB] px-4 py-2 rounded-full bg-white"
            onClick={() => onEdit(blog)}
          >
            <Pencil color="#3B82F6" />
          </button>
          <button
            className="border border-[#E5E7EB] px-4 py-2 rounded-full bg-white"
            onClick={() => onDelete(blog.id)}
          >
            <Trash2 color="#EF4444" />
          </button>
        </div>
      </div>
      <div className="flex gap-1.5 items-center justify-end ">
        <div
          className={`${
            blog.status === "public" ? "bg-[#10B981]" : "bg-[#F59E0B]"
          } size-1.5 rounded-full`}
        />
        <h4 className="subHeading">{blog.status}</h4>
      </div>
    </div>
  );
};

export default Card;
