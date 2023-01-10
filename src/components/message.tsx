import { Timestamp } from "firebase/firestore";
import { MessageInterface } from "../state/messages";

const Message = ({ photo, name, timestamp, message }: MessageInterface) => {
  const formatedDate = () => {
    const now = new Date();

    const newTimeStamp = Object.setPrototypeOf(
      { ...timestamp },
      Timestamp.prototype
    );

    const date = newTimeStamp.toDate();

    const timeFormat = Intl.DateTimeFormat("en-in", { timeStyle: "short" });

    if (date.getDate() === now.getDate())
      return "today at " + timeFormat.format(date);

    if (date.getDate() === now.getDate() - 1)
      return "yesterday at " + timeFormat.format(date);

    const formatOption = Intl.DateTimeFormat("en-in", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    });

    return formatOption.format(date);
  };

  return (
    <div className="message">
      <img src={photo} alt="" />

      <div className="main">
        <div className="head">
          <span className="name">{name}</span>
          <span className="timestamp">{formatedDate()}</span>
        </div>
        <div className="text">{message}</div>
      </div>
    </div>
  );
};

export default Message;
