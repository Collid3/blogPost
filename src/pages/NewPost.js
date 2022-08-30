import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../fetchPosts/fetchPosts";

const NewPost = ({ posts, setPosts }) => {
	const [newPost, setNewPost] = useState(``);
	const [newTitle, setNewTitle] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async () => {
		const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
		const post = { id, title: newTitle, post: newPost };
		await api.post("/posts", post);
		setPosts([...posts, post]);
		navigate("/");
	};

	const handleCancel = () => {
		navigate("/");
	};

	const newPostTextArea = document.getElementById("new-post");

	return (
		<main className="input-form newPost">
			<div>
				<label>Title: </label>
				<br />
				<input
					type="text"
					placeholder="Post title"
					value={newTitle}
					onChange={(e) => setNewTitle(e.target.value)}
				/>
			</div>
			<div>
				<label>Post: </label>
				<br />
				<textarea
					id="new-post"
					cols="40"
					rows="15"
					placeholder="Whats on your mind"
					value={newPost}
					onChange={(e) => setNewPost(e.target.value)}
				></textarea>
			</div>

			<div className="buttons">
				<button className="submit-post" onClick={handleSubmit}>
					Post
				</button>
				<button className="cancel-post" onClick={handleCancel}>
					Cancel
				</button>
			</div>
		</main>
	);
};
export default NewPost;
