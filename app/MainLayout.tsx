import { Dispatch, SetStateAction } from "react";
import Navbar from "./Components/Navbar";
import ModalController from "./Modal/ModalController";
import { Blog } from "./types/blog";

const MainLayout = ({
  children,
  handleAddNewBlog,
  title,
  setTitle,
  description,
  setDescription,
  author,
  setAuthor,
  status,
  setStatuses,
  onSaveEdit,
  blog,
  createdDate,
  setCreatedDate,
  updatedDate,
  setUpdatedDate,
}: Readonly<{
  children: React.ReactNode;
  handleAddNewBlog: (newBlog: Blog) => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  author: string;
  setAuthor: Dispatch<SetStateAction<string>>;
  status: string;
  setStatuses: Dispatch<SetStateAction<string>>;
  onSaveEdit: (updatedBlog: Blog) => void;
  blog: Blog | null;
  createdDate: string;
  setCreatedDate: Dispatch<SetStateAction<string>>;
  updatedDate: string;
  setUpdatedDate: Dispatch<SetStateAction<string>>;
}>) => {
  return (
    <div className=" h-screen flex flex-col gap-5 items-center max-w-[1440px] w-full px-8">
      <ModalController
        handleAddNewBlog={handleAddNewBlog}
        onSaveEdit={onSaveEdit}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        author={author}
        setAuthor={setAuthor}
        status={status}
        setStatuses={setStatuses}
        blog={blog}
        createdDate={createdDate}
        setCreatedDate={setCreatedDate}
        updatedDate={updatedDate}
        setUpdatedDate={setUpdatedDate}
      />
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
