import { useEffect } from "react";
import { State } from "../state";
import { useSelector } from "react-redux";
import { menuOpen } from "../state/menu";
import { Input, Message } from "../components";
import { MessageInterface } from "../state/messages";

const Chat = () => {
  const { name: groupName } = useSelector(
    (state: State) => state.entities.selectedGroup
  );
  const messages = useSelector((state: State) => state.messages);

  useEffect(() => {
    const container = document.querySelector(".messages") as HTMLDivElement;
    const containerHeight = container.scrollHeight;
    container.scrollTo({ top: containerHeight, behavior: "smooth" });
  });

  return (
    <div className="chat">
      <div className="header">
        <span className="material-symbols-rounded menu" onClick={menuOpen}>
          menu
        </span>
        <span>{groupName}</span>
      </div>

      <div className="messages">
        {messages.map((message: MessageInterface, i: any) => (
          <Message key={i} {...message} />
        ))}
      </div>

      <div className="messaging-area">
        <Input buttonName="send" placeholder="Type a message here" />
      </div>
    </div>
  );
};

export default Chat;
