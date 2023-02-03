import { useSelector } from "react-redux";
import { State } from "../state";
import {
  CreateUserModal,
  CreateChannelModal,
  AddMemberModal,
} from "./../sections";

const Modal = ({ children: Children }: { children: any }) => {
  const modal = useSelector((state: State) => state.entities.modal);

  return (
    <>
      {Object.keys(modal).length !== 0 && (
        <div className="modal">
          {modal.name === "createUser" && <CreateUserModal {...modal.props} />}

          {modal.name === "createChannel" && (
            <CreateChannelModal {...modal.props} />
          )}

          {modal.name === "addMember" && <AddMemberModal {...modal.props} />}
        </div>
      )}
      {Children}
    </>
  );
};

export default Modal;
