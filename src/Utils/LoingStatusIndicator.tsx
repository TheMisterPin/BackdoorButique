import React, { useContext } from 'react';
import { UserContext } from '../context'; // adjust the import path

const LoginStatusIndicator: React.FC = () => {
  const { state } = useContext(UserContext);
  const { isLogin } = state;

  const divStyle = {
    width: '100px',
    height: '100px',

  };

  return (
    <div style={{ ...divStyle, backgroundColor: isLogin ? 'green' : 'red' }}>
      {isLogin ? 'Logged In' : 'Logged Out'}
    </div>
  );
};

export default LoginStatusIndicator;