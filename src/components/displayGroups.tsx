import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getGroups } from "../services/firestore";
import { State } from "../state";
import { setGroups } from "../state/groups";
import { Group } from "./../state/groups";

const Groups = () => {
  const userGroups = useSelector((state: State) => state.user.groupsId);
  const groups = useSelector((state: State) => state.groups);

  useEffect(() => {
    if (userGroups) loadGroups();
  }, [userGroups]);

  const loadGroups = async () => {
    const groups: Group[] = [];
    const groupsData = await getGroups();

    userGroups.forEach((id) => {
      groups.push(groupsData?.[id]);
    });

    setGroups(groups);
  };

  return (
    <div className="groups">
      {groups.map((group) => (
        <div className="group" key={group.id}>
          <span className="icon">{group.name[0]}</span>
          <span className="name">{group.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Groups;
