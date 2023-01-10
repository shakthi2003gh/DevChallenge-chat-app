import { Input } from "../components";
import { hideModal } from "../state/modal";
import { useState } from "react";

const CreateChannelModal = ({}) => {
  const [channelName, setChannelName] = useState("");
  const [channelDescription, setChannelDescription] = useState("");

  const handleTyping = (action: any) => (e: any) => action(e.target.value);

  const handleCreate = () => {
    hideModal();
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
