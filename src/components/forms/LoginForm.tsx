import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserLoginData } from "../../data";
import { UserContext } from "../../context";

export function LoginForm() {
  const { loginHandler } = useContext(UserContext);
  const { register, handleSubmit } = useForm<UserLoginData>();

  const onSubmit = (loginData: UserLoginData) => {
    loginHandler(loginData.username, loginData.password); 
  };

  return (
    <>
      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        aria-label="Login form"
      >
        <h1 className="form-Header">Welcome Back!</h1>
        <p className="form-text">Please Login</p>
        <div className="form-body">
          <input
            className="form-input"
            type="text"
            {...register("username")}
            placeholder="Username"
            aria-label="Enter your username"
            required
          />
          <input
            className="form-input"
            type="password"
            {...register("password")}
            placeholder="Password"
            aria-label="Enter your password"
            required
          />
          <button
            className="form-button"
            type="submit"
            aria-label="Submit login form"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
}
