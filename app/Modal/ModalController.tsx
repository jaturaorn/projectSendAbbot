import { Dispatch, SetStateAction } from "react";
import { useGlobalContext } from "../State/Global";
import { Blog } from "../types/blog";
import ModalForm from "./ModalForm";

interface props {
  handleAddNewBlog: (newBlog: Blog) => void;
  title: string;
  setTitle: Dispatch<SetStateAction<string>>;
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
  author: string;
  setAuthor: Dispatch<SetStateAction<string>>;
  status: string;
  setStatuses: Dispatch<SetStateAction<string>>;
}

const ModalController = ({
  handleAddNewBlog,
  title,
  setTitle,
  description,
  setDescription,
  author,
  setAuthor,
  status,
  setStatuses,
}: props) => {
  const { openmodal, setOpenmodal } = useGlobalContext()!;
  return (
    <>
      {" "}
      {openmodal == "addForm" && (
        <ModalForm
          setStatus={setOpenmodal}
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
    </>
  );
};

export default ModalController;
