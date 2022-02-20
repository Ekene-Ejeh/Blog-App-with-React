import React from "react";
import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login.jsx";
import Register from "./components/pages/register/Register.jsx";

export default function App() {
	return (
		<>
			<TopBar />
			<Register />
		</>
	);
}
