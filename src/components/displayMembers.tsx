import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { State } from "../state";
import { User } from "../state/user";
import { getUsers } from "../services/firestore";

const Members = () => {
  const [members, setMembers] = useState<User[]>([]);
  const { membersId } = useSelector(
    (state: State) => state.entities.selectedGroup
  );

  useEffect(() => {
    if (membersId) loadMembers();
  }, [membersId]);

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
        </div>
      ))}
    </div>
  );
};

export default Members;
