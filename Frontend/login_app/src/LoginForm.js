import React, {useState} from "react";
import './LoginForm.css';

const LoginForm = ({onSubmit}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
  
	const handleSubmit = (e) => {
	  e.preventDefault();
	  onSubmit(username, password);
	  setUsername("");
	  setPassword("");
	};

	return (
		<form className="form"> 
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value) } required
        />
			<label htmlFor="password">Password</label>
			<input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} required
        />
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}

export default LoginForm;
