import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUsers } from "./services/firestore";
import { setUser } from "./state/user";
import { displayModal } from "./state/modal";
import { LoginPage } from "./pages";
import ChatPage from "./pages/chatPage";
import { State } from "./state";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const user = useSelector((state: State) => state.user);
  const navigate = useNavigate();

  const loginUser = async (userId: string) => {
    const users = await getUsers();

    if (users?.[userId]) {
      setUser(users[userId]);
      navigate("/");
    } else {
      navigate("/login");
      displayModal("createUser", { userId });
    }
  };

  useEffect(() => {
    if (Object.keys(user).length !== 0) return;
    const lsUserId = localStorage.getItem("dvc-chat-app-user-id");

    if (lsUserId) loginUser(lsUserId);
    else navigate("/login");
  }, [user]);

  return (
    <Routes>
      <Route path="/login" element={<LoginPage loginUser={loginUser} />} />
      <Route path="/" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
