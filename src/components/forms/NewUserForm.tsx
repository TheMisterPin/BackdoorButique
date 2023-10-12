import { useEffect } from "react";
import "./form.css";
import { useForm } from "react-hook-form";
import { Form } from './Form';
import { useNavigate } from "react-router-dom";


type User = {
  userName: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone: number;
  address: string;
  city: string;
  state: string;
  zip: number;
  country: string;
};

type UserLoginData = {
  userName: string;
  password: string;
};



export default function NewUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },

  } = useForm<User>();
const Navigate = useNavigate();
  

  const createNewUser = (newUserData: User) => {
    const existingUsers = JSON.parse(
      localStorage.getItem("users.json") || "[]"
    );
    existingUsers.push(newUserData);
    localStorage.setItem("users.json", JSON.stringify(existingUsers));
Navigate("/");
    alert("User created successfully!");

  }

  ;

  return (
    <form onSubmit={handleSubmit(createNewUser)}>
      <input type="text" {...register("userName") } placeholder="User Name" />
      <input type="text" {...register("email") } placeholder="Email" />
      <input type="password" {...register("password") } placeholder="Password" />
      <input type="text" {...register("firstName") } placeholder="First Name" />
      <input type="text" {...register("lastName") } placeholder="Last Name" />
      <input type="number" {...register("phone") } placeholder="Phone" />
      <input type="text" {...register("address") } placeholder="Address" />
      <input type="text" { ...register("city") } placeholder="City" />
      <input type="text" { ...register("state") } placeholder="State" />
      <input type="number" { ...register("zip") } placeholder="Zip" />
      <input type="text" { ...register("country") } placeholder="Country" />

      <input type="submit" value="Submit" />
    </form>
  );
}
