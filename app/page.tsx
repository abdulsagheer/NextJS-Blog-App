"use client";
import CreatePost from "./components/AddPost";

export default function Home() {
	return (
		<h1 className="m-8 text-3xl font-bold underline">
			<CreatePost />
		</h1>
	);
}
