import { signIn } from "../services/auth";

const LoginPage = ({ loginUser }: { loginUser: Function }) => {
  const handleLogin = async () => {
    const { uid: userId, photoURL } = await signIn();

    loginUser(userId, photoURL);
  };

  return (
    <div className="login-page">
      <h1>DevChallenge Chat App</h1>

      <p>Login to start messaging</p>

      <button className="btn btn--primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
