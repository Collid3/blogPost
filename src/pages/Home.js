import { Link } from "react-router-dom";

const Home = ({ posts }) => {
	return (
		<main>
			<ul className="posts">
				{posts.map((post) => (
					<Link to={`/postpage/${post.id}`} key={post.id}>
						<li className="post">
							<h2>{post.title}</h2>
							<p>{post.post}</p>
						</li>
					</Link>
				))}
			</ul>
		</main>
	);
};
export default Home;
