import { State } from "../state";
import { useSelector } from "react-redux";
import { menuOpen } from "./../state/menu";

const WelcomeScreen = () => {
  const opened = useSelector((state: State) => state.entities.menu.open);

  return (
    <div className="welcome-screen">
      <h1>Welcome to DevChat</h1>

      <p>Select a channel and start chatting.</p>

      <button className="btn btn--primary" onClick={menuOpen} disabled={opened}>
        Show Channels
      </button>
    </div>
  );
};

export default WelcomeScreen;
