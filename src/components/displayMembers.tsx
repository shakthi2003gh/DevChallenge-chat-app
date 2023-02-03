import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { onSnapshot } from "firebase/firestore";
import { State } from "../state";
import { User } from "../state/user";
import { getUsers, groupsRef } from "../services/firestore";
import { selectedGroup } from "../state/selectedGroup";

const Members = () => {
  const [members, setMembers] = useState<User[]>([]);
  const group = useSelector((state: State) => state.entities.selectedGroup);
  const { id, membersId } = group;

  useEffect(() => {
    if (membersId) loadMembers();
  }, [membersId]);

  useEffect(() => {
    const unsubscribe = onSnapshot(groupsRef, (doc) => {
      const newGroup = doc.data()?.[id];

      if (newGroup.membersId.length !== membersId.length)
        selectedGroup(newGroup);
    });

    return unsubscribe;
  }, [group, id]);

  const loadMembers = async () => {
    const members: User[] = [];
    const users = await getUsers();

    membersId.forEach((id) => members.push(users?.[id]));
    setMembers(members);
  };

  return (
    <div className="members">
      {members.map((member) => (
        <div key={member.id} className="member">
          <img src={member.photo} alt="" className="photo" />
          <span className="name">{member.name}</span>
          <span
            title="Copy User Id"
            className="material-symbols-rounded copy"
            onClick={() => navigator.clipboard.writeText(member.id)}
          >
            content_copy
          </span>
        </div>
      ))}
    </div>
  );
};

export default Members;
