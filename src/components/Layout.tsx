import React from "react";
import { Metadata } from "next";
import { ibmPlexMono } from "../fonts";
import NavBar from "@/components/NavBar";
import GlobalStyles from "@/lib/GlobalStyles";
import StyledComponentsRegistry from "@/lib/StyledComponentsRegistry";
import styles from "./layout.module.css";
// export const metadata: Metadata = {
// 	title: "Emily Berryman - Dev Portfolio",
// 	description: "Portfolio of recent web development projects",
// };

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<div className={ibmPlexMono.className}>
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
		</div>
	);
};

export default Layout;
