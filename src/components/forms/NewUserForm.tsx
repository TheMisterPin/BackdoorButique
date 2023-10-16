import { useState, useEffect } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserLoginData } from "../../data/";

export function NewUserForm() {
  const { register, handleSubmit, formState: { } } = useForm<UserLoginData>();
  const Navigate = useNavigate();
  
  const [users, setUsers] = useState<UserLoginData[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
    if (Array.isArray(existingUsers)) {
      setUsers(existingUsers);
    } else {
      console.error("Corrupted data in localStorage: 'users' should be an array");
    }
    
    // Check login status
    const loginStatus = JSON.parse(localStorage.getItem("usersIn") || "false");
    setIsLoggedIn(loginStatus);
    
    if (isLoggedIn) {
      Navigate("/shop");
    }
  }, [isLoggedIn, Navigate]);

  const createNewUser = (newUserData: UserLoginData) => {
    if (Array.isArray(users)) {
      setUsers([...users, newUserData]);
      localStorage.setItem("users", JSON.stringify([...users, newUserData]));

      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      
      Navigate("/shop");
      alert("User created successfully!");
      console.log(newUserData);
    } else {
      console.error("Corrupted data: 'users' should be an array");
    }
  };

  return (
    <form onSubmit={handleSubmit(createNewUser)}>
      <label className="form-label"> Chooes a UserName</label>
      <input type="text" {...register("username")} />
      <label className="form-label"> Choose a Password</label>
      <input type="password" {...register("password")} placeholder="Password" />
      <input className="form-submit-button" type="submit" value="Submit" />
    </form>
  );
}
