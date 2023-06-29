import React, { useState } from "react";
import './App.css';
import LoginForm from './LoginForm';
import LoginAttemptList from './LoginAttemptList';

const App = () => {
  const [loginAttempts, setLoginAttempts] = useState([]);

  const handleLogin = (username) => {
    setLoginAttempts((prevUsers)=>[...prevUsers,username])
  };

  return (
    <div className="App">
      <LoginForm onSubmit={handleLogin} />
      <LoginAttemptList attempts={loginAttempts} />
    </div>
  );
};

export default App;
