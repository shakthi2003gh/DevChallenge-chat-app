import { createUser, getGroup, getMessages } from "../../services/firestore";
import { hideModal } from "../modal";
import { setUser } from "./../user";
import { selectedGroup } from "./../selectedGroup";
import { Timestamp } from "firebase/firestore";
import {
  getMessages as requestMessages,
  MessageInterface,
  setMessages,
} from "./../messages";

const api = () => (next: any) => async (action: any) => {
  if (action.type === "group/select") {
    const group = await getGroup(action.payload.groupId);

    selectedGroup(group);
    requestMessages(group.messagesId);
    return;
  }

  if (action.type === "messages/get") {
    const { messages } = await getMessages(action.payload.id);

    messages.forEach((message: MessageInterface) => {
      message.timestamp = { ...message.timestamp };
    });

    setMessages(messages);
    return;
  }

  next(action);

  if (action.type === "user/created")
    createUser(action.payload.user).then(() => {
      hideModal();
      setUser(action.payload.user);
    });
};

export default api;
