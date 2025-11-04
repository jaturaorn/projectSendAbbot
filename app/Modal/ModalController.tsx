import { useGlobalContext } from "../State/Global";
import ModalForm from "./ModalForm";

const ModalController = () => {
  const { openmodal, setOpenmodal } = useGlobalContext()!;
  return (
    <> {openmodal == "addForm" && <ModalForm setStatus={setOpenmodal} />}</>
  );
};

export default ModalController;
