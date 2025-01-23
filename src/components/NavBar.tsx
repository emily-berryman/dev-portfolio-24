"use client";
import React from "react";
import styled from "styled-components";
import Link from "next/link";
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
	position: sticky;
	top: 0;
	z-index: 1;
`;
const List = styled.ul`
	min-height: 36px;
	display: flex;
	justify-content: flex-end;
	gap: 32px;
	background: white;
	align-items: center;
	padding: 0 24px;
	border-bottom: 1px solid grey;
	font-family: "IBM Plex Mono", "serif";
	text-transform: uppercase;
	color: #232323;
	font-weight: 400;
	letter-spacing: 0.3rem;
	list-style: none;
`;

export default NavBar;
