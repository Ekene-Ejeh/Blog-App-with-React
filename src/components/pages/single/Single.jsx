import "./single.css";
import SideBar from "../../sidebar/SideBar";
import SinglePost from "../../singlePost/SinglePost";

export default function Single() {
	return (
		<>
			<div className="single">
				<SinglePost />
				<SideBar />
			</div>
		</>
	);
}
