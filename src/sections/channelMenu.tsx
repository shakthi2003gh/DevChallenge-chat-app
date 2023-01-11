import { useSelector } from "react-redux";
import { Members } from "../components";
import { State } from "../state";
import { showMainMenu } from "../state/menu";

const ChannelMenu = () => {
  const group = useSelector((state: State) => state.entities.selectedGroup);
  const { name, description } = group;

  return (
    <div className="channel-menu">
      <div className="header">
        <span className="material-symbols-rounded back" onClick={showMainMenu}>
          arrow_back_ios
        </span>
        <span className="title">All channels</span>
      </div>

      <div className="body">
        <div className="channel-name">{name}</div>

        <div className="channel-description">{description}</div>

        <div className="channel-member-list">
          <div className="title">Members</div>
          <Members />
        </div>
      </div>
    </div>
  );
};

export default ChannelMenu;
