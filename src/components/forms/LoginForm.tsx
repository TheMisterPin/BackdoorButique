import { useContext } from "react";
import { useForm } from "react-hook-form";
import "./form.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { UserLoginData } from '../../data/Types/UserLogin';

export default function LoginForm() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<UserLoginData>();
  const { state, loginHandler } = useContext(UserContext);

  const onSubmit = (loginData: UserLoginData) => {
    loginHandler(loginData.userName, loginData.password);

    if (state.isLogin) {
      alert(`Login successful! Good to see you again ${loginData.userName}`);
      navigate('/');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(onSubmit)} aria-label="Login form">
        <h1 className="form-Header">Welcome Back!</h1>
        <p className="form-text">Please Login</p>
        <div className="form-body">
          <input
            className="form-input"
            type="text"
            { ...register("userName") }
            placeholder="Username"
            aria-label="Enter your username"
            required
          />
          <input
            className="form-input"
            type="password"
            { ...register("password") }
            placeholder="Password"
            aria-label="Enter your password"
            required
          />
          <button className="form-button" type="submit" aria-label="Submit login form">
            Login
          </button>
        </div>
      </form>
    </>
  );
}