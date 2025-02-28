import React from "react";
import styled from "styled-components";
import Link from "next/link";

// const VARIANTS = {
// 	primary: {
// 		"--backgroundColor": "${COLORS.primary}",
// 		"--border": "none",
// 		"--fontColor": "${COLORS.white",
// 	},
// 	secondary: {
// 		"--backgroundColor": "${COLORS.white}",
// 		"--border": "`${2px} solid ${COLORS.primary}`",
// 		"--fontColor": "${COLORS.white}",
// 	},
// 	textLink: {
// 		"--backgroundColor": "${COLORS.white}",
// 		"--border": "none",
// 		"--fontColor": "${COLORS.gray}",
// 	},
// };

interface ButtonProps {
	variant?: string;
	children: React.ReactNode;
	href?: string;
	target?: string;
	rel?: string;
}

const Button = ({ variant, children, rel, href, target }: ButtonProps) => {
	let Component;
	variant ? (Component = SecondaryButton) : (Component = ButtonBase);

	return (
		<Component
			href={href}
			target={target}
			rel={rel}
			as={href ? Link : "button"}
		>
			{children}
		</Component>
	);
};

const ButtonBase = styled.button`
	font-size: var(--font-size-small);
	padding: 10px 21px;
	background-color: transparent;
	border: 1px solid var(--medium-grey);
	border-radius: 4px;
	text-transform: uppercase;
	width: max-content;

	&:hover {
		background-color: var(--primary-color);
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
		color: var(--black);
	}

	&:focus-visible {
		outline: 2px solid var(--secondary-color);
		outline-offset: 4px;
		border-radius: 4px;
	}

	&:focus,
	&:active {
		color: var(--secondary-color);
	}
`;

const SecondaryButton = styled(ButtonBase)`
	background-color: var(--light-grey);
	&:hover {
		background-color: var(--secondary-color);
		color: var(--white);
	}
`;

export default Button;
