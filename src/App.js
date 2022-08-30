import "./App.css";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import { Route, Routes, Link } from "react-router-dom";
import api from "./fetchPosts/fetchPosts";
import { useEffect, useState } from "react";

const App = () => {
	const date = new Date().getFullYear();
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");

	useEffect(() => {
		const fetchItems = async () => {
			const response = await api.get("/posts");
			setPosts(response.data);
		};

		fetchItems();
	}, [search]);

	return (
		<div className="App" id="app">
			<header>
				<h1>Seroba JS Blog</h1>
			</header>

			<Routes>
				<Route
					path="/"
					element={
						<Home
							posts={posts.filter(
								(post) =>
									post.post
										.toLowerCase()
										.includes(search.toLowerCase()) ||
									post.title
										.toLowerCase()
										.includes(search.toLowerCase())
							)}
							search={search}
							setSearch={setSearch}
						/>
					}
				/>
				<Route
					path="/postpage/:id"
					element={<PostPage posts={posts} setPosts={setPosts} />}
				/>
				<Route
					path="/newpost"
					element={<NewPost posts={posts} setPosts={setPosts} />}
				/>
				<Route path="/about" element={<About />} />
			</Routes>

			<footer>
				<p>Copyright &copy; {date}</p>
			</footer>
		</div>
	);
};
export default App;
