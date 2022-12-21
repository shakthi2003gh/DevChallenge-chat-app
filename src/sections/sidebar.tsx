import { useSelector } from "react-redux";
import { State } from "../state";
import { menuClose } from "../state/menu";
import { Profile } from "../components";
import { MainMenu } from ".";

const SideBar = () => {
  const open = useSelector((state: State) => state.entities.menu.open);

  return (
    <div className={"sidebar" + (open ? " show" : "")}>
      <MainMenu />

      <Profile />

      <span className="material-symbols-rounded close" onClick={menuClose}>
        close
      </span>
    </div>
  );
};

export default SideBar;
