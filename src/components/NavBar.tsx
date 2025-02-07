"use client";
import React from "react";
import { QUERIES } from "../constants.js";
import styled from "styled-components";
import StrikethroughLink from "./Link/StrikethroughLink";

function NavBar() {
	return (
		<Header>
			<nav>
				<List>
					<li>
						<StrikethroughLink href="#work" linkText="Work" color="black" />
					</li>
					<li>
						<StrikethroughLink href="#about" linkText="About" color="black" />
					</li>
					<li>
						<StrikethroughLink
							href="#contact"
							linkText="Contact"
							color="var(--black)"
						/>
					</li>
				</List>
			</nav>
		</Header>
	);
}

const Header = styled.header`
	/* position: sticky;
	top: 0;
	z-index: 1; */
`;

const List = styled.ul`
	/* min-height: 36px; */
	display: flex;
	gap: 32px;
	background: var(--white);
	/* padding: 0 24px; */
	font-family: var(--primary-font);
	text-transform: uppercase;
	color: var(--black);
	font-weight: var(--font-weight-normal);
	letter-spacing: 0.3rem;
	list-style: none;

	@media ${QUERIES.mobileAndDown} {
		font-size: var(--font-size-small);
		gap: 16px;
	}
`;

export default NavBar;
