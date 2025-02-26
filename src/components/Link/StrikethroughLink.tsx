import styled from "styled-components";
import Link from "next/link";

interface StrikethroughLinkProps {
	href: string;
	linkText: string;
	target?: string;
	ariaLabel?: string;
}

function StrikethroughLink({
	href,
	linkText,
	target,
	ariaLabel,
}: StrikethroughLinkProps) {
	return (
		<Span>
			<NavLink target={target} as={Link} href={href} aria-label={ariaLabel}>
				{linkText}
			</NavLink>
		</Span>
	);
}

const NavLink = styled.a`
	text-transform: uppercase;
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
		background: var(--secondary-color);
	}

	&::before {
		left: -2.5px;
	}

	&::after {
		content: "";
		right: 2.5px;
		background: var(--secondary-color);
		transition: width 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
	}

	&:hover::before {
		background: var(--secondary-color);
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
