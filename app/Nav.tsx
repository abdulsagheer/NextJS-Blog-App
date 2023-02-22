import { getServerSession } from "next-auth/next";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import { signIn } from "next-auth/react";
import Login from "./auth/Login";
import Logged from "./auth/Logged";
import Link from "next/link";

export default async function Nav() {
	const session = await getServerSession(authOptions);

	return (
		<nav className="flex items-center justify-between p-8 ">
			<Link href={"/"}>
				<h1 className="text-lg font-bold">Blog Post.</h1>
			</Link>
			<ul className="flex items-center gap-6"></ul>
			{!session?.user && <Login />}
			{session?.user && <Logged image={session.user.image || ""} />}
		</nav>
	);
}
