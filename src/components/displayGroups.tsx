import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getGroups } from "../services/firestore";
import { State } from "../state";
import { setGroups, Group } from "../state/groups";
import { selectGroup } from "../state/selectedGroup";

const Groups = () => {
  const userGroups = useSelector((state: State) => state.user.groupsId);
  const groups = useSelector((state: State) => state.groups);
  const { selectedGroup } = useSelector((state: State) => state.entities);

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

  const handleClick = (id: string) => {
    if (selectedGroup.id !== id) selectGroup(id);
  };

  return (
    <div className="groups">
      {groups.map((group) => (
        <div
          className="group"
          key={group.id}
          onClick={() => handleClick(group.id)}
        >
          <span className="icon">{group.name[0]}</span>
          <span className="name">{group.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Groups;
