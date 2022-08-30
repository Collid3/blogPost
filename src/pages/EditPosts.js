import { useNavigate, useParams } from "react-router-dom";
import api from "../fetchPosts/fetchPosts";

const EditPosts = ({
	posts,
	setPosts,
	setEdit,
	editTitle,
	setEditTitle,
	editPost,
	setEditPost,
}) => {
	const { id } = useParams();
	const navigate = useNavigate();

	const submitEdit = async () => {
		const newPost = { id, title: editTitle, post: editPost };
		const updatedPosts = posts.map((post) =>
			post.id.toString() === id ? newPost : post
		);
		await api.put(`/posts/${id}`, newPost);
		setPosts(updatedPosts);
		setEditPost("");
		setEditTitle("");
		navigate(`/postpage/${id}`);
		setEdit(false);
	};

	const cancelEdit = () => {
		setEditTitle("");
		setEditPost("");
		setEdit(false);
	};

	return (
		<div className="input-form">
			<p>
				<label htmlFor="">Title: </label>
				<br />
				<input
					type="text"
					value={editTitle}
					onChange={(e) => setEditTitle(e.target.value)}
				/>
			</p>
			<p>
				<label htmlFor="">Post: </label>
				<br />
				<textarea
					name=""
					id=""
					cols="30"
					rows="10"
					value={editPost}
					onChange={(e) => setEditPost(e.target.value)}
				/>
			</p>

			<div className="buttons">
				<button className="done" onClick={submitEdit}>
					done
				</button>
				<button className="cancel" onClick={cancelEdit}>
					cancel
				</button>
			</div>
		</div>
	);
};
export default EditPosts;
