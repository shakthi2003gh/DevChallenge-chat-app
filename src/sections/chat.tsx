import { useState, useEffect } from "react";
import { State } from "../state";
import { useSelector } from "react-redux";
import { menuOpen } from "../state/menu";
import { Input, Message } from "../components";
import { MessageInterface, getMessages } from "../state/messages";
import { sendMessage } from "./../state/messages";
import { onSnapshot, Timestamp } from "firebase/firestore";
import { messageRef } from "./../services/firestore";

const Chat = () => {
  const [text, setText] = useState("");
  const user = useSelector((state: State) => state.user);
  const { name, messagesId } = useSelector(
    (state: State) => state.entities.selectedGroup
  );
  const messages = useSelector((state: State) => state.messages);

  useEffect(() => {
    const unsubscribe = onSnapshot(messageRef, (doc) => {
      const newMessages = doc.data()?.[messagesId].messages;

      if (newMessages.length !== messages.length) getMessages(messagesId);
    });

    return unsubscribe;
  }, [messagesId]);

  useEffect(() => {
    const container = document.querySelector(".messages") as HTMLDivElement;
    const containerHeight = container.scrollHeight;
    container.scrollTo({ top: containerHeight, behavior: "smooth" });
  }, [messages]);

  const handleTyping = (e: any) => {
    setText(e.target.value);
  };

  const handleSend = (e: any) => {
    if ((e.code === "Enter" || e.type === "click") && text.trim()) {
      const message: MessageInterface = {
        id: Date.now().toString(),
        message: text,
        name: user.name,
        photo: user.photo,
        timestamp: { ...Timestamp.now() },
      };

      setText("");
      sendMessage(messagesId, message);
    }
  };

  return (
    <div className="chat">
      <div className="header">
        <span className="material-symbols-rounded menu" onClick={menuOpen}>
          menu
        </span>
        <span>{name}</span>
      </div>

      <div className="messages">
        {messages.map((message: MessageInterface, i: any) => (
          <Message key={i} {...message} />
        ))}
      </div>

      <div className="messaging-area">
        <Input
          buttonName="send"
          placeholder="Type a message here"
          value={text}
          onChange={handleTyping}
          onClick={handleSend}
          onKeyUp={handleSend}
        />
      </div>
    </div>
  );
};

export default Chat;
