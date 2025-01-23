import React from "react";
import styled from "styled-components";
import Link from "next/link";

// const SIZES = {
// 	small: {
// 		"--borderRadius": 2 + "px",
// 		"--fontSize": 16 / 16 + "rem",
// 		"--padding": "4px 12px",
// 	},
// medium: {
//   "--borderRadius": 2 + "px",
//   "--fontSize": 18 / 16 + "rem",
//   "--padding": "12px 20px",
// },
// large: {
//   "--borderRadius": 4 + "px",
//   "--fontSize": 21 / 16 + "rem",
//   "--padding": "16px 32px",
// },
// };

const VARIANTS = {
	primary: {
		"--backgroundColor": "${COLORS.primary}",
		"--border": "none",
		"--fontColor": "${COLORS.white",
	},
	secondary: {
		"--backgroundColor": "${COLORS.white}",
		"--border": "`${2px} solid ${COLORS.primary}`",
		"--fontColor": "${COLORS.white}",
	},
	textLink: {
		"--backgroundColor": "${COLORS.white}",
		"--border": "none",
		"--fontColor": "${COLORS.gray}",
	},
};

interface ButtonProps {
	variant: "primary" | "secondary";
	children: React.ReactNode;
	href?: string;
	target?: string;
}

const Button = ({ variant, children, href, target }: ButtonProps) => {
	// const styles = SIZES[size];
	let Component;
	variant === "primary"
		? (Component = PrimaryButton)
		: (Component = SecondaryButton);

	return (
		<Component href={href} target={target} as={href ? Link : "button"}>
			{children}
		</Component>
	);
};

const ButtonBase = styled.button`
	font-size: var(--font-size-small);
	padding: 9px 40px;
	background-color: var(--white);
	border: 2px dotted var(--black);
	border-radius: 14px;
	text-transform: uppercase;

	&:hover {
		border: 2px solid var(--black);
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
	}

	&:focus,
	a:focus {
		outline: 2px solid var(--secondary-blue);
		outline-offset: 4px;
	}
`;

const PrimaryButton = styled(ButtonBase)`
	background-color: var(--primary-green);
`;

const SecondaryButton = styled(ButtonBase)`
	background-color: transparent;

	&:hover {
		background-color: var(--medium-gray);
	}
`;

export default Button;
