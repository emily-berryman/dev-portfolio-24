"use client";
import React from "react";
import { QUERIES } from "../constants.js";
import styled from "styled-components";
import StrikethroughLink from "@/components/Link/StrikethroughLink";

function NavBar() {
	return (
		<Nav>
			<List>
				<li>
					<StrikethroughLink href="/#work" linkText="Work" />
				</li>
				<li>
					<StrikethroughLink href="/#about" linkText="About" />
				</li>
				<li>
					<StrikethroughLink href="/#contact" linkText="Contact" />
				</li>
			</List>
		</Nav>
	);
}

const Nav = styled.nav`
	grid-area: header;
	border-bottom: 1px solid var(--medium-grey);
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 0 var(--space-l);
	position: sticky;
	top: 0;
	z-index: 2;
	background: var(--white);
`;

const List = styled.ul`
	display: flex;
	gap: var(--space-xl);

	@media ${QUERIES.mobileAndDown} {
		font-size: var(--font-size-small);
		gap: 16px;
	}
`;

export default NavBar;
