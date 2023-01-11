import { useSelector } from "react-redux";
import { State } from "../state";
import { menuClose } from "../state/menu";
import { Profile } from "../components";
import { MainMenu, ChannelMenu } from ".";

const SideBar = () => {
  const open = useSelector((state: State) => state.entities.menu.open);
  const mainMenu = useSelector((state: State) => state.entities.menu.mainMenu);

  return (
    <div className={"sidebar" + (open ? " show" : "")}>
      {mainMenu ? <MainMenu /> : <ChannelMenu />}

      <Profile />

      <span className="material-symbols-rounded close" onClick={menuClose}>
        close
      </span>
    </div>
  );
};

export default SideBar;
