import { useEffect } from "react";
import { useSelector } from "react-redux";
import { LoginPage } from "./pages";
import { getUsers } from "./services/firestore";
import { setUser } from "./state/user";
import { displayModal } from "./state/modal";

function App() {
  const user = useSelector((state: any) => state.user);

  const loginUser = async (userId: string) => {
    const users = await getUsers();

    if (users?.[userId]) setUser(users[userId]);
    else displayModal("createUser", { userId });
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) return;
    const lsUserId = localStorage.getItem("dvc-chat-app-user-id");

    if (lsUserId) loginUser(lsUserId);
  }, []);

  if (Object.keys(user).length === 0)
    return <LoginPage loginUser={loginUser} />;

  return <h1>HELLO</h1>;
}

export default App;
