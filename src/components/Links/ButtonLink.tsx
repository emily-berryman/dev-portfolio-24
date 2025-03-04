import React from "react";
import Link from "next/link";
import styles from "./buttonlink.module.css";

interface ButtonProps {
	variant?: string;
	children: React.ReactNode;
	href: string;
	target?: string;
	rel?: string;
	passHref?: boolean;
}

const Button = ({ children, rel, href, target, passHref }: ButtonProps) => {
	return (
		<Link
			className={styles.buttonLink}
			href={href}
			target={target}
			rel={rel}
			passHref={passHref}
		>
			{children}
		</Link>
	);
};

export default Button;
