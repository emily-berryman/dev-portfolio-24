import React from "react";
import styled from "styled-components";
import Link from "next/link";

interface StrikethroughLinkProps {
	href: string;
	linkText: string;
	color?: string;
	target?: string;
}

function StrikethroughLink({
	href,
	linkText,
	color,
	target,
}: StrikethroughLinkProps) {
	return (
		<Span color={color}>
			<NavLink target={target} color={color} as={Link} href={href}>
				{linkText}
			</NavLink>
		</Span>
	);
}

const NavLink = styled.a`
	color: ${(props) => props.color};
	text-transform: uppercase;

	&:focus-visible {
		outline: 2px solid var(--secondary-blue);
		outline-offset: 4px;
		border-radius: 4px;
	}

	/* &:active {
		outline: none;
	} */
`;

const Span = styled.span`
	position: relative;
	display: block;
	cursor: pointer;

	&::before,
	&::after {
		content: "";
		position: absolute;
		width: 0;
		height: 2px;
		top: 50%;
		margin-top: 0.5px;
		background: ${(props) => props.color};
	}

	&::before {
		left: -2.5px;
	}

	&::after {
		content: "";
		right: 2.5px;
		background: ${(props) => props.color};
		transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
	}

	&:hover::before {
		background: ${(props) => props.color};
		width: 100%;
		transition: width 0.5s cubic-bezier(0.22, 0.61, 0.36, 1);
	}

	&:hover::after {
		background: transparent;
		width: 100%;
		transition: 0s;
	}
`;

export default StrikethroughLink;
