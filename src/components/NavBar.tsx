import React from "react";
import styles from "../styles/page.module.css";

function NavBar() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav_bar}>
				<li>
					<a href="#work">Work</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="contact">Contact</a>
				</li>
			</nav>
		</header>
	);
}

export default NavBar;
