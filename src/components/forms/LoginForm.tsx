import { useForm } from "react-hook-form";
import "./form.css";
import { useNavigate } from "react-router-dom";

type UserLoginData = {
  userName: string;
  password: string;
};

export default function LoginForm() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLoginData>();

  const verifyUser = (loginData: UserLoginData) => {
    const existingUsers = JSON.parse(
      localStorage.getItem("users.json") || "[]"
    );

    const isValidUser = existingUsers.some(
      (user: UserLoginData) =>
        user.userName === loginData.userName &&
        user.password === loginData.password
    );

    if (isValidUser) {
          alert("Login successful!");
      navigate('/')
    } else {
    alert("Invalid username or password");

    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit(verifyUser)}>
        <h1 className="form-Header">Welcome Back!</h1>
        <p className="form-text">Please Login</p>
        <div className="form-body">
          <input
            className="form-input"
            type="text"
            { ...register("userName") }
            placeholder="Username"
          />
          <input
            className="form-input"
            type="password"
            { ...register("password") }
            placeholder="Password"
          />
          <button className="form-button" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
}
