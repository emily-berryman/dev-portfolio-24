import Link from "next/link";
import styles from "./strikethroughlink.module.css";

interface StrikethroughLinkProps {
	href: string;
	linkText: string;
	target?: string;
	ariaLabel?: string;
	rel?: string;
}

function StrikethroughLink({
	href,
	linkText,
	target,
	ariaLabel,
	rel,
}: StrikethroughLinkProps) {
	return (
		<span className={styles.span}>
			<Link
				className={styles.navLink}
				target={target}
				href={href}
				rel={rel}
				aria-label={ariaLabel}
			>
				{linkText}
			</Link>
		</span>
	);
}

export default StrikethroughLink;
