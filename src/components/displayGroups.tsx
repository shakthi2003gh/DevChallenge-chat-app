import { useEffect } from "react";
import { useSelector } from "react-redux";
import { onSnapshot } from "firebase/firestore";
import { userRef, getGroups } from "../services/firestore";
import { State } from "../state";
import { setUser, User } from "./../state/user";
import { setGroups, Group } from "../state/groups";
import { selectGroup } from "../state/selectedGroup";
import { showChannelMenu } from "./../state/menu";

const Groups = ({ search }: { search: string }) => {
  const user = useSelector((state: State) => state.user);
  const groups = useSelector((state: State) => state.groups);
  const { selectedGroup } = useSelector((state: State) => state.entities);

  const { id: userId, groupsId: userGroups } = user;

  useEffect(() => {
    if (userGroups) loadGroups();
  }, [userGroups]);

  useEffect(() => {
    const unsubscribe = onSnapshot(userRef, (doc: any) => {
      if (!userId) return;
      const updateUser: User = doc.data()?.[userId];

      if (updateUser.groupsId.length !== user.groupsId.length)
        setUser(updateUser);
    });

    return unsubscribe;
  }, [userId]);

  const loadGroups = async () => {
    const groups: Group[] = [];
    const groupsData = await getGroups();

    userGroups.forEach((id) => {
      groups.push(groupsData?.[id]);
    });

    if (groups.length !== 0) setGroups(groups);
  };

  const handleClick = (id: string) => {
    if (selectedGroup.id !== id) selectGroup(id);
    showChannelMenu();
  };

  return (
    <div className="groups">
      {groups
        .filter(({ name }) =>
          search !== "" ? name.match(RegExp(search, "gi")) : true
        )
        .map((group) => (
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
