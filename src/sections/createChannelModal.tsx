import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createGroup } from "../services/firestore";
import { hideModal } from "../state/modal";
import { Input } from "../components";
import { State } from "../state";

const CreateChannelModal = ({}) => {
  const { id } = useSelector((state: State) => state.user);
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");

  useEffect(() => {
    window.addEventListener("keyup", handleClose);
    return () => window.removeEventListener("keyup", handleClose);
  }, []);

  const handleTyping = (action: any) => (e: any) => action(e.target.value);

  const handleCreate = () => {
    if (channelName.trim() === "" || channelDescription.trim() === "") return;

    const group = {
      id: Date.now().toString(),
      name: channelName,
      description: channelDescription,
      membersId: [id],
      messagesId: Date.now().toString(),
    };

    createGroup(group);

    hideModal();
  };

  const handleClose = (e: any) => {
    if (e.key === "Escape") hideModal();
  };

  return (
    <div className="create-channel-modal">
      <div className="title">New Channel</div>

      <Input
        type="text"
        placeholder="Channel name"
        value={channelName}
        onChange={handleTyping(setChannelName)}
      />

      <Input
        type="textarea"
        placeholder="Channel Description"
        value={channelDescription}
        onChange={handleTyping(setChannelDescription)}
      />

      <button className="btn btn--primary" onClick={handleCreate}>
        Save
      </button>
    </div>
  );
};

export default CreateChannelModal;
