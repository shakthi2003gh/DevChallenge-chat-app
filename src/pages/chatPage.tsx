import { useEffect } from "react";
import { useSelector } from "react-redux";
import { State } from "../state";
import { menuClose, menuOpen } from "../state/menu";
import { Chat, SideBar } from "../sections";

const ChatPage = () => {
  const selectedGroupName = useSelector(
    (state: State) => state.entities.selectedGroup.name
  );

  useEffect(() => {
    if (selectedGroupName) menuClose();
    else menuOpen();
  }, [selectedGroupName]);

  return (
    <div className="chat-app">
      <SideBar />
      {selectedGroupName && <Chat />}
    </div>
  );
};

export default ChatPage;
