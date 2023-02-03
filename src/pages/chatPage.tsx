import { useSelector } from "react-redux";
import { State } from "../state";
import { Chat, SideBar, WelcomeScreen } from "../sections";

const ChatPage = () => {
  const selectedGroupName = useSelector(
    (state: State) => state.entities.selectedGroup.name
  );

  return (
    <div className="chat-app">
      <SideBar />
      {selectedGroupName ? <Chat /> : <WelcomeScreen />}
    </div>
  );
};

export default ChatPage;
