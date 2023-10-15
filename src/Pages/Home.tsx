import React, { useContext } from 'react';
import { Link, Route } from 'react-router-dom';
import { UserContext } from '../context';
import { NewUserForm } from '../components';


export function Home () {
  const { state } = useContext(UserContext);
  
  console.log('Is logged in:', state.isLogin); // Debugging line

  return (
    <div>
      {state.isLogin ? (
        <p>Hello, User</p>
      ) : (
        <Link to="/newuserform">Go to New User Form</Link>
      )}
    </div>
  );
};
