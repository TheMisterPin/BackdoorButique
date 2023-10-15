import React, { useState, useEffect } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserLoginData } from "../../data/";

export function NewUserForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<UserLoginData>();
  const Navigate = useNavigate();
  
  const [users, setUsers] = useState<UserLoginData[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Get existing users
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
      
      // Set login status
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
      <input type="text" {...register("username")} placeholder="User Name" />
      <input type="password" {...register("password")} placeholder="Password" />
      <input type="submit" value="Submit" />
    </form>
  );
}
