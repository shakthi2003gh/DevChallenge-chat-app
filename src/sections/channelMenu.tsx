import { useSelector } from "react-redux";
import { State } from "../state";
import { showMainMenu } from "../state/menu";
import { displayModal } from "./../state/modal";
import { Members } from "../components";

const ChannelMenu = () => {
  const group = useSelector((state: State) => state.entities.selectedGroup);
  const { name, description } = group;

  const handleModal = () => {
    displayModal("addMember", { groupId: group.id });
  };

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
          <div className="head">
            <div className="title">Members</div>

            <span className="material-symbols-rounded" onClick={handleModal}>
              add
            </span>
          </div>

          <Members />
        </div>
      </div>
    </div>
  );
};

export default ChannelMenu;
