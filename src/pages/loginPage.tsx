import { signIn } from "../services/auth";

const LoginPage = () => {
  return (
    <div className="login-page">
      <h1>DevChallenge Chat App</h1>

      <p>Login to start messaging</p>

      <button className="btn btn--primary" onClick={signIn}>
        Login
      </button>
    </div>
  );
};

export default LoginPage;
