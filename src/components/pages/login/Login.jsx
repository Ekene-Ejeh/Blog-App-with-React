import React from "react";
import "./login.css";

export default function Login() {
	return (
		<>
			<div className="login">
				<form className="loginForm">
					<label htmlFor="">Email</label>
					<input type="text" placeholder="Enter tour email" />
					<label htmlFor="">Password</label>
					<input type="password" placeholder="Enter tour password" />
					<button className="loginButton">Login</button>
				</form>
				<button className="loginRegisterButton">Register</button>
			</div>
		</>
	);
}
