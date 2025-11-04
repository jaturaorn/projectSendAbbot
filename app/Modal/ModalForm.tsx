import { Dispatch, SetStateAction } from "react";
import Layout from "./Layout";

const ModalForm = ({
  setStatus,
}: {
  setStatus: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Layout>
      <div className="flex flex-col gap-5 w-full">
        <button className="" onClick={() => setStatus("")}>
          close
        </button>
      </div>
    </Layout>
  );
};

export default ModalForm;
