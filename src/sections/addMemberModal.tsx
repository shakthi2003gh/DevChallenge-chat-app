import { useEffect, useState } from "react";
import { addUserInGroup, getUsers } from "../services/firestore";
import { hideModal } from "../state/modal";
import { Input } from "../components";

const AddMemberModal = ({ groupId }: { groupId: string }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    window.addEventListener("keyup", handleClose);
    return () => window.removeEventListener("keyup", handleClose);
  }, []);

  const handleType = (e: any) => setValue(e.target.value);

  const handleAddMember = async () => {
    if (value === "") return;
    const users = await getUsers();

    if (!users?.[value]) return;

    addUserInGroup(value, groupId);
    hideModal();
  };

  const handleClose = (e: any) => {
    if (e.key === "Escape") hideModal();
  };

  return (
    <div className="add-member-modal">
      <div className="title">Add new member</div>

      <Input placeholder="Enter user id" value={value} onChange={handleType} />

      <button className="btn btn--primary" onClick={handleAddMember}>
        Add
      </button>
    </div>
  );
};

export default AddMemberModal;
