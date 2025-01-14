import type { Metadata } from "next";
import "../styles/globals.css";
import { ibmPlexMono, tektur } from "../fonts";
import NavBar from "@/components/NavBar";

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
		<html lang="en" className={`${ibmPlexMono.className} ${tektur.className}`}>
			<body>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
