import { Link } from "react-router-dom";
import React from "react";
import "./topbar.css";

export default function TopBar() {
	const user = false;
	return (
		<>
			<div className="top">
				<div className="topLeft">
					<i className="topIcon fa-brands fa-facebook-square"></i>
					<i className="topIcon fa-brands fa-twitter-square"></i>
					<i className="topIcon fa-brands fa-instagram-square"></i>
					<i className="topIcon fa-brands fa-youtube-square"></i>
				</div>
				<div className="topCenter">
					<ul className="topList">
						<li className="topListItems">
							<Link className="Link" to="/">
								HOME
							</Link>
						</li>
						<li className="topListItems">
							<Link className="Link" to="/">
								ABOUT
							</Link>
						</li>
						<li className="topListItems">
							<Link className="Link" to="/">
								CONTACT
							</Link>
						</li>
						<li className="topListItems">
							<Link className="Link" to="/write">
								WRITE
							</Link>
						</li>
						<li className="topListItems">{user && "LOGOUT"}</li>
					</ul>
				</div>
				<div className="topRight">
					{user ? (
						<img
							className="topImg"
							src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
							alt=""
						/>
					) : (
						<ul className="topList">
							<li className="topListItems">
								<Link className="Link" to="/login">
									LOGIN
								</Link>
							</li>
							<li className="topListItems">
								<Link className="Link" to="/register">
									REGISTER
								</Link>
							</li>
						</ul>
					)}

					<i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
				</div>
			</div>
		</>
	);
}
