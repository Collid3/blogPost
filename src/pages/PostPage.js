import { useParams, Link, useNavigate } from "react-router-dom";

const PostPage = ({ posts, setPosts }) => {
	const { id } = useParams();
	const navigate = useNavigate();
	const post = posts.find((post) => post.id === parseInt(id));

	const deletePost = (id) => {
		const newPosts = posts.filter((post) => post.id !== id);
		setPosts(newPosts);
		navigate("/");
	};

	return (
		<main className="postpage">
			<h2>{post.title}</h2>
			<p>{post.post}</p>
			<div className="buttons">
				<button className="edit">Edit</button>
				<button className="delete" onClick={() => deletePost(post.id)}>
					Delete
				</button>
				<button className="home">
					<Link to="/">Back to Home</Link>
				</button>
			</div>
		</main>
	);
};
export default PostPage;
