import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../fetchPosts/fetchPosts";
import EditPosts from "./EditPosts";

const PostPage = ({ posts, setPosts }) => {
	const [edit, setEdit] = useState(false);
	const [editTitle, setEditTitle] = useState("");
	const [editPost, setEditPost] = useState("");

	const { id } = useParams();
	const navigate = useNavigate();
	const post = posts.find((post) => post.id.toString() === id);

	const deletePost = async (id) => {
		if (window.confirm("Are you sure that you want to delete this file?")) {
			await api.delete(`/posts/${id}`);
			const newPosts = posts.filter((post) => post.id !== id);
			setPosts(newPosts);
			navigate("/");
		}
	};

	const handleEdit = (id) => {
		const post = posts.find((post) => post.id === id);
		setEditTitle(post.title);
		setEditPost(post.post);
		setEdit(true);
	};

	function goHome() {
		navigate("/");
	}

	window.addEventListener("scroll", () => {
		if (window.scrollY > 200) {
			document.querySelector(".toTop").classList.add("active");
		} else {
			document.querySelector(".toTop").classList.remove("active");
		}
	});

	document.addEventListener("click", (e) => {
		const optionBtn = e.target.matches("[data-options]");
		const options = document.querySelector(".options");
		const isActive = options.classList[1];

		console.log(isActive);
		console.log(e.target.closest(".buttons"));

		if (!optionBtn && e.target !== null) {
			if (isActive !== undefined && e.target.closest(".buttons") === null) {
				options.classList.remove("active");
			} else {
				return;
			}
		}

		if (optionBtn) {
			options.classList.add("active");
		}
	});

	return (
		<main className="postpage">
			<nav>
				<ul>
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/newpost">
						<li>New Post</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
				</ul>
			</nav>
			{!edit && post && (
				<div className="post-page">
					<div className="post-header">
						<h2 id="post-title">{post.title}</h2>

						<button className="options" data-options>
							Options
						</button>

						<div className="buttons">
							<button
								className="edit"
								onClick={() => handleEdit(post.id)}
							>
								Edit
							</button>
							<button
								className="delete"
								onClick={() => deletePost(post.id)}
							>
								Delete
							</button>
							<button className="home" onClick={goHome}>
								Home
							</button>
						</div>
					</div>
					<p>{post.post}</p>

					<a href="#post-title">
						<button className="toTop">Back to Top</button>
					</a>
				</div>
			)}

			{edit && (
				<EditPosts
					posts={posts}
					setPosts={setPosts}
					setEdit={setEdit}
					editTitle={editTitle}
					setEditTitle={setEditTitle}
					editPost={editPost}
					setEditPost={setEditPost}
				/>
			)}
		</main>
	);
};
export default PostPage;
