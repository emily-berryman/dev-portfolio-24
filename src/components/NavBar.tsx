"use client";
import React from "react";
import styled from "styled-components";

function NavBar() {
	return (
		<Header>
			<Nav>
				<li>
					<a href="#work">Work</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
				</li>
			</Nav>
		</Header>
	);
}

const Header = styled.header`
	position: sticky;
	top: 0;
`;

const Nav = styled.nav`
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
