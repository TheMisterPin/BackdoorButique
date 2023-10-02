import './form.css'
type User ={
name: string;
 surname: string;
 address: string;
 city: string;
 zipcode: number;
 country: string;
 email: string;
 password: string;
}

export default function NewUserForm() {

  function handleNewUser(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
 //get the values of each input 
 

    

}




  return (
<form className='form' onSubmit={handleNewUser}>
  <h1 className='form-Header'>Let's get started!</h1>

  <div className='form-body'>
 
  <input className='form-input' type="text" name="name" id="name" placeholder="Name" />
  <input className='form-input' type="text" name="surname" id="surname" placeholder="Surname" />
  <input className='form-input' type="text" name="address" id="address" placeholder="Address" />
  <input className='form-input' type="text" name="city" id="city" placeholder="City" />
  <input className='form-input' type="text" name="zipcode" id="zipcode" placeholder="Zipcode" />
  <input className='form-input' type="text" name="country" id="country" placeholder="Country" />
  <input className='form-input' type="text" name="email" id="email" placeholder="Email" />
  <input className='form-input' type="password" name="password" id="password" placeholder="Password" />
  <input className='form-input' type="password" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" />
  <button className='form-button' type="submit">Register</button>
  </div>
 
</form>


  )
}
