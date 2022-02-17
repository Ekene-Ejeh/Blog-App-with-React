import "./write.css";

export default function Write() {
	return (
		<>
			<div className="write">
				<form action="" className="writeForm">
					<div className="writeFormGroup">
						<label htmlFor="fileInput">
							<i class="fa-solid fa-plus"></i>
						</label>
						<input type="file" id="fileInput" style={{ display: "none" }} />
						<input
							type="text"
							placeholder="Title"
							className="writeInput"
							autoFocus={true}
						/>
					</div>
					<div className="writeForGroup">
						<textarea
							placeholder="Tell your story.."
							type="text"
							className="writeInput  writeText  "
						></textarea>
					</div>
					<button className="writeSubmit">Publish</button>
				</form>
			</div>
		</>
	);
}
