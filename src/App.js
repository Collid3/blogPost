import "./App.css";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

const App = () => {
	const date = new Date().getFullYear();

	const [posts, setPosts] = useState([
		{
			id: 1,
			title: "Just bored",
			post: "Hello everyone this is my post",
		},
		{
			id: 2,
			title: "Just chilling",
			post: "Yo people. I am coding",
		},
	]);

	return (
		<div className="App">
			<header>
				<h1>Seroba JS Blog</h1>
			</header>

			<section className="navigation">
				<input type="search" placeholder="Search posts" />
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/newpost">New Post</Link>
						</li>
						<li>
							<Link to="/about">About</Link>
						</li>
					</ul>
				</nav>
			</section>

			<Routes>
				<Route path="/" element={<Home posts={posts} />} />
				<Route
					path="/postpage/:id"
					element={<PostPage posts={posts} setPosts={setPosts} />}
				/>
				<Route path="/newpost" element={<NewPost />} />
				<Route path="/about" element={<About />} />
			</Routes>

			<footer>
				<p>Copyright &copy; {date}</p>
			</footer>
		</div>
	);
};
export default App;
