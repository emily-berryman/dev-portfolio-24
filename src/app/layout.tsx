import type { Metadata } from "next";
import { ibmPlexMono } from "../fonts";
import NavBar from "@/components/NavBar";
import GlobalStyles from "@/styles/GlobalStyles";

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={ibmPlexMono.className}>
			<GlobalStyles />
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
