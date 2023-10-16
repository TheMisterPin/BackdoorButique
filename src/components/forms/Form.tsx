import "./form.css";
import { Link, NavLink } from "react-router-dom";

export function FormHome() {
  return (
    <>
      
      <form className="form">
        <h1 className="form-Header">Who are you?</h1>
        <h4 className="form-subHeader">Stranger Danger?</h4>
        <div className="form-body">
          <div className="block">
          <label>Have an account?</label>
          <NavLink to="/loginform">
            <button className="loginButton">Login</button>
          </NavLink></div>
          <label className="form-subHeader">Or</label>
          <div className="block">
          <label className="form-label">I Wanna Join!</label>
          <NavLink to="/newuserform">
            <button className="signUp-button">SignUp</button>
          </NavLink></div>
        </div>
      </form>
    </>
  );
}
