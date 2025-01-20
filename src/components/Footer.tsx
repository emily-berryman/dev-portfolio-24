"use client";

import React from "react";
import styled from "styled-components";

function Footer() {
	return (
		<FooterBar>
			<FooterContent>Emily Berryman</FooterContent>
		</FooterBar>
	);
}

const FooterBar = styled.footer`
	height: 32px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-top: 2px dotted black;
`;

const FooterContent = styled.span`
	font-family: "IBM Plex Mono", "serif";
	font-size: 0.8125rem;
	font-weight: 300;
	letter-spacing: 0.3rem;
	text-transform: uppercase;
`;

export default Footer;
