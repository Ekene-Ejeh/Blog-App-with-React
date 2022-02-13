import React from "react";
import "./topbar.css";

export default function TopBar() {
	return (
		<div className="top">
			<div className="topLeft">
				<i className="topIcon fa-brands fa-facebook-square"></i>
				<i className="topIcon fa-brands fa-twitter-square"></i>
				<i className="topIcon fa-brands fa-instagram-square"></i>
				<i className="topIcon fa-brands fa-youtube-square"></i>
			</div>
			<div className="topCenter">
				<ul className="topList">
					<li className="topListItems">Home</li>
					<li className="topListItems">About</li>
					<li className="topListItems">Contact</li>
					<li className="topListItems">Write</li>
					<li className="topListItems">Logout</li>
				</ul>
			</div>
			<div className="topRight">
				<img className="topImg" src="" alt="" />
				<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
			</div>
		</div>
	);
}
