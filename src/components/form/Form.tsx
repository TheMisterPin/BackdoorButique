
import './form.css'
import { NavLink } from 'react-router-dom';



type User = {
  name: string;
  surname: string;
  email: string;
  phone: number;
  address: string;
  city: string;
  zipcode: number;
  country: string;
  }

  // function handleNewUser() {   
  //   const user: User = {
  //     name: form.name,
  //     surname: form.surname,
  //     email: form.email,
  //     phone: form.phone,
  //     address: form.address,
  //     city: form.city,
  //     zipcode: form.zipcode,
  //     country: form.country,
  //   }
  //   console.log(user)
  // }

export function Form() {
  return (

    <form className="form">
      <h1 className='form-Header'>Who are you?</h1>
      <div className="form-body">      
    
      <label>Have an account?</label>
      <NavLink to="/loginform"><button>Login</button></NavLink> 
       <label>Or</label>   
      <NavLink to="/newuserform"><button>Create new account</button></NavLink>
      {/* <button onClick={handleNewUser}>Submit</button> */}  </div> 
    </form>

  )
}