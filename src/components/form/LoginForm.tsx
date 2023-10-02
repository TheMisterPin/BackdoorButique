import './form.css'



export default function LoginForm() {
  return (
    <>
    <form className="form">
      <h1 className='form-Header'>Welcome Back!</h1>
      <p className='form-text'>Please Login</p>
      <div className="form-body">      
  <input className="form-input" type="text" name="userInput" id="userInput" placeholder="Username" />
 <input className="form-input" type="password" name="password" id="password" placeholder="Password" />
  <button className="form-button" type="submit">Login</button>
   </div>
    </form>
    </>
  )
}

