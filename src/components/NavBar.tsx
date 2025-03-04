import React from "react";
import { QUERIES } from "../constants.js";
import styled from "styled-components";
import StrikethroughLink from "@/components/Links/StrikethroughLink";
import styles from "./navbar.module.css";

function NavBar() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.list}>
				<li>
					<StrikethroughLink href="/#work" linkText="Work" />
				</li>
				<li>
					<StrikethroughLink href="/#about" linkText="About" />
				</li>
				<li>
					<StrikethroughLink href="/#contact" linkText="Contact" />
				</li>
			</ul>
		</nav>
	);
}

export default NavBar;
