import "./singlePost.css";

export default function SinglePost() {
	return (
		<>
			<div className="singlePost">
				<div className="singlePostWrapper">
					<img
						src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="singlePostImg"
					/>
				</div>
				<h1 className="singlePostTitle">Lorem ipsum dolor sit.</h1>
				<div className="singlePostEdit">
					<i class="fa-solid fa-pen-to-square"></i>
					<i class="fa-solid fa-trash-can"></i>
				</div>
			</div>
		</>
	);
}
