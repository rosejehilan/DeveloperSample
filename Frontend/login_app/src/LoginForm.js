import React, { useState } from "react";
import './LoginForm.css';

const LoginForm = (props) => {
	const [userName, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (event) =>{
		event.preventDefault();

		props.onSubmit({
			login: userName,
			password: password,
		});
	}

	return (
		<form className="form">
			<h1>Login</h1>
			<label htmlFor="name">Name</label>
			<input type="text" id="name" value={userName} onChange={(e)=>setUsername(e.target.value) } required />
			<label htmlFor="password">Password</label>
			<input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
			<button type="submit" onClick={handleSubmit}>Continue</button>
		</form>
	)
}

export default LoginForm;