import { Dispatch, SetStateAction } from "react";
import { useGlobalContext } from "../State/Global";
import { Blog } from "../types/blog";
import ModalForm from "./ModalForm";
import ModalEdit from "./ModalEdit";

interface props {
  handleAddNewBlog: (newBlog: Blog) => void;
  onSaveEdit: (updatedBlog: Blog) => void;
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

const ModalController = ({
  handleAddNewBlog,
  onSaveEdit,
  title,
  setTitle,
  description,
  setDescription,
  author,
  setAuthor,
  status,
  setStatuses,
  blog,
  createdDate,
  setCreatedDate,
  updatedDate,
  setUpdatedDate,
}: props) => {
  const { openmodal, setOpenmodal } = useGlobalContext()!;
  return (
    <>
      {" "}
      {openmodal == "addForm" && (
        <ModalForm
          onCloseModal={setOpenmodal}
          handleAddNewBlog={handleAddNewBlog}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          author={author}
          setAuthor={setAuthor}
          status={status}
          setStatuses={setStatuses}
        />
      )}
      {openmodal == "editForm" && (
        <ModalEdit
          onCloseModal={setOpenmodal}
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
      )}
    </>
  );
};

export default ModalController;
