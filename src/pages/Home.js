import { Link } from "react-router-dom";

const Home = ({ posts, search, setSearch }) => {
	return (
		<main>
			<section className="navigation">
				<input
					type="search"
					placeholder="Search posts"
					value={search}
					onChange={(e) => setSearch(e.target.value)}
				/>
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
			</section>
			<ul className="posts">
				{posts.map((post) => (
					<Link to={`/postpage/${post.id}`} key={post.id}>
						<li className="post">
							<h2>{post.title}</h2>
							<p>
								{post.post.length < 50
									? post.post
									: `${post.post.slice(0, 50)}...`}
							</p>
						</li>
					</Link>
				))}
			</ul>
		</main>
	);
};
export default Home;
