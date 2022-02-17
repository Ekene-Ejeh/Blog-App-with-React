import "./singlePost.css";

export default function SinglePost() {
	return (
		<>
			<div className="singlePost">
				<div className="singlePostWrapper">
					<img
						src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
						alt=""
						className="singlePostImg"
					/>
					<h1 className="singlePostTitle">
						Lorem ipsum dolor sit.
						<div className="singlePostEdit">
							<i className="singlePostIcon fa-solid fa-pen-to-square"></i>
							<i className="singlePostIcon fa-solid fa-trash-can"></i>
						</div>
					</h1>
					<div className="singlePostInfo">
						<span className="singlePostAuthor">
							Author: <b>Ekene</b>
						</span>
						<span className="singlePostDate">1 hour ago</span>
					</div>
					<p className="singlePostDesc">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
						consequatur quos ad a soluta dignissimos placeat ipsum quidem nam
						eum ab, sit architecto quis incidunt assumenda alias consequuntur
						voluptatum, neque voluptatem accusamus fugit inventore velit
						maiores? Quidem optio reprehenderit est repudiandae vero magnam
						delectus voluptate nulla alias inventore illo quod porro ea,
						provident consequatur maxime fugiat aliquid incidunt blanditiis
						doloremque! Earum laboriosam quisquam, ipsum nisi dolorem neque,
						iste veritatis ut repellat cum similique eos, animi quibusdam
						eligendi iure aspernatur ipsam molestiae expedita minima? Sequi,
						delectus quia! Vitae quis inventore mollitia, ipsam, unde qui soluta
						laudantium eligendi voluptates fugiat, labore quas. Lorem ipsum
						dolor sit amet, consectetur adipisicing elit. Distinctio consequatur
						quos ad a soluta dignissimos placeat ipsum quidem nam eum ab, sit
						architecto quis incidunt assumenda alias consequuntur voluptatum,
						neque voluptatem accusamus fugit inventore velit maiores? Quidem
						optio reprehenderit est repudiandae vero magnam delectus voluptate
						nulla alias inventore illo quod porro ea, provident consequatur
						maxime fugiat aliquid incidunt blanditiis doloremque! Earum
						laboriosam quisquam, ipsum nisi dolorem neque, iste veritatis ut
						repellat cum similique eos, animi quibusdam eligendi iure aspernatur
						ipsam molestiae expedita minima? Sequi, delectus quia! Vitae quis
						inventore mollitia, ipsam, unde qui soluta laudantium eligendi
						voluptates fugiat, labore quas.
					</p>
				</div>
			</div>
		</>
	);
}
