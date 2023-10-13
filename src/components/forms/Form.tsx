import "./form.css";
import { Link, NavLink } from "react-router-dom";


export function Form() {
  return (<>
    <Link to={"/"}>close</Link>
    <form className="form">
      <h1 className="form-Header">Who are you?</h1>
      <div className="form-body">
        <label>Have an account?</label>
        <NavLink to="/loginform">
          <button>Login</button>
        </NavLink>
        <label>Or</label>
        <NavLink to="/newuserform">
          <button>Create new account</button>
        </NavLink>
        
      </div>
    </form></>
  );
}
