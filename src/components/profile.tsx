import { useSelector } from "react-redux";
import { State } from "../state";
import { logout } from "./../state/user";
import { popupMenuToggle } from "./../state/menu";

const Profile = () => {
  const user = useSelector((state: State) => state.user);
  const open = useSelector((state: State) => state.entities.menu.popupOpen);

  const handleCopyUserid = () => {
    navigator.clipboard.writeText(user.id);
  };

  return (
    <div className="profile">
      <img src={user.photo} alt="" />

      <span className="name">
        {user.name}
        <span
          title="Copy User Id"
          className="material-symbols-rounded copy"
          onClick={handleCopyUserid}
        >
          content_copy
        </span>
      </span>

      <span className="material-symbols-rounded" onClick={popupMenuToggle}>
        {open ? "expand_less" : "expand_more"}
      </span>

      {open && (
        <div className="popup-menu">
          <div className="active">
            <span className="material-symbols-rounded">account_circle</span>
            <span>my profile</span>
          </div>

          <div>
            <span className="material-symbols-rounded">group</span>
            <span>group Chat</span>
          </div>

          <div className="logout" onClick={logout}>
            <span className="material-symbols-rounded">logout</span>
            <span>logout</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
