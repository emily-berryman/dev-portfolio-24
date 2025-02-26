import React from "react";
import { Metadata } from "next";
import { ibmPlexMono } from "../fonts";
import NavBar from "@/components/NavBar";
import styles from "./layout.module.css";
import GlobalStyles from "@/lib/GlobalStyles";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";

export const metadata: Metadata = {
	title: "Emily Berryman - Dev Portfolio",
	description: "Portfolio of recent web development projects",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<html lang="en" className={ibmPlexMono.className}>
				<body>
					<GlobalStyles />
					<div className={styles.pageWrapper}>
						<NavBar />
						<main className={styles.main}>
							<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
						</main>
						<footer className={styles.footer}>
							<span>Emily Berryman © </span>
						</footer>
					</div>
				</body>
			</html>
		</>
	);
}
