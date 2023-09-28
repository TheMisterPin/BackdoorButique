import './form.css'
type User = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zipcode: string;
  country: string;
  }

  function handleNewUser() {
   
    
    const user: User = {
      name: form.name,
      surname: form.surname,
      email: form.email,
      phone: form.phone,
      address: form.address,
      city: form.city,
      zipcode: form.zipcode,
      country: form.country,
    }
    console.log(user)
  }

export function Form() {
  return (
  
    <form className="form">
      <h1>Form</h1>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Surname" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Phone" />
      <input type="text" placeholder="Address" />
      <input type="text" placeholder="City" />
      <input type="text" placeholder="Zipcode" />
      <input type="text" placeholder="Country" />
      <button onClick={handleNewUser}>Submit</button>
    </form>
  
  )
}