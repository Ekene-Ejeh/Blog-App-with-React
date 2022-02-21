import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./components/pages/home/Home";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import Settings from "./components/pages/settings/Settings";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Post from "./components/post/Post";

export default function App() {
	return (
		<>
			<TopBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/login" element={<Login />} />
				<Route path="/write" element={<Write />} />
				<Route path="/settings" element={<Settings />} />
				<Route path="/post/:postId" element={<Single />} />
			</Routes>
		</>
	);
}
