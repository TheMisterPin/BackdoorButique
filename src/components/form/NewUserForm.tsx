import './form.css'
import{useForm} from 'react-hook-form'

type UserLoginData={
  userName:string,
  email:string,
  password:string,
}

interface Field {
  type: string;
  name: keyof User;  // Using keyof for better type checking
  label: string;
}

const formSchema: Field[] = [
  { type: 'text', name: 'userName', label: 'Username' },
  { type: 'password', name: 'password', label: 'Password' },
  { type: 'email', name: 'email', label: 'Email' },
];

// enum InputType {
//   userName = 'text',
//   password = 'password',
//   email = 'email',
//   confirmPassword = 'password'
// }

// const generateForm = (user: User) => {
//   return Object.keys(user).map(key => ({
//     type: InputType,
//     name: key,
//     label: key.charAt(0).toUpperCase() + key.slice(1),
//     required: true

//   }));
// };





export default function NewUserForm() {

 






  return (



  )
}


// ok, note to self, we get the user type
// i deconstruct it to create the form schema
// we use an enum for the input types 
// then we dinamycally generatei it as the form component
// i use the dynamic way so i can easly add fields and add scalability 