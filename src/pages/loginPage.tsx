import { signIn } from "../services/auth";

const LoginPage = ({ loginUser }: { loginUser: Function }) => {
  const handleLogin = async () => {
    const userId = await signIn();

    loginUser(userId);
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
