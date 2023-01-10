import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../state/user";
import { Input } from "./../components";

const CreateUserModal = ({
  userId,
  photoURL,
}: {
  userId: string;
  photoURL: string;
}) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (name.length === 0) return;

    addUser({
      id: userId,
      name,
      groupsId: [],
      photo: photoURL,
    });

    setName("");
    navigate("/");
  };

  return (
    <div className="create-user-modal">
      <div className="title">create your user name</div>

      <Input
        placeholder="Username"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />

      <button className="btn btn--primary" onClick={handleSubmit}>
        Create
      </button>
    </div>
  );
};

export default CreateUserModal;
