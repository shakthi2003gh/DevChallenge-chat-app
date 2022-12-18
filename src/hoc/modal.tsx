import { useSelector } from "react-redux";
import { CreateUserModal } from "./../sections";

const Modal = ({ children: Children }: { children: any }) => {
  const modal = useSelector((state: any) => state.entities.modal);

  return (
    <>
      {Object.keys(modal).length !== 0 && modal.name === "createUser" && (
        <div className="modal">
          <CreateUserModal {...modal.props} />
        </div>
      )}
      {Children}
    </>
  );
};

export default Modal;
