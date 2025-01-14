import Image from "next/image";
import styles from "../styles/page.module.css";

export default function Home() {
	return (
		<>
			<section
				className={`${styles.horizontal_padding} ${styles.vertical_padding}`}
			>
				<h1 className={styles.heading_one}>
					<span>Emily Berryman</span>
					<br /> Web Developer
				</h1>
			</section>
			<span className={styles.spacer_block} />
			<section className={styles.about}>
				<div className={styles.about_img}>
					<Image src="/abstract.png" alt="" width={279} height={279} />
				</div>
				<div className={styles.about_info}>
					<h2 className={styles.heading_three}>About</h2>
					<p>
						Regular body text. Duis nisi nibh, lobortis at interdum eu, pretium
						non ante. Cras bibendum Vestibulum ex nisl, consectetur id augue ac,
						fringilla suscipit metus. Duis turpis mi, dignissim bibendum odio
						quis, tempus dapibus nunc. Sed eu ipsum felis. Nulla facilisi.
						Praesent interdum lacus eu consectetur fermentum. Interdum et
						malesuada fames ac ante ipsum primis in faucibus. Etiam consectetur
						vehicula rutrum.
					</p>
				</div>
			</section>
			<section className={styles.horizontal_padding}>
				<h2
					className={`${styles.heading_two} ${styles.heading_padding} ${styles.grid_item}`}
				>
					Work
				</h2>
				<div className={styles.project_overview_container}>
					<h3 className={`${styles.heading_three} ${styles.grid_item}`}>
						Ka ora Ka Ako
					</h3>
					<span className={`${styles.project_overview} ${styles.grid_item}`}>
						<p>
							Regular body text. Duis nisi nibh, lobortis at interdum eu,
							pretium non ante. Cras bibendum
						</p>
					</span>
					<div className={`${styles.button_container} ${styles.grid_item}`}>
						<button className={`${styles.small_body_text} ${styles.button}`}>
							Case Study
						</button>
					</div>
				</div>
				<div>GIF Image Slideshow to insert header</div>
			</section>
			<span className={styles.spacer_block_lg} />
			<footer className={styles.footer}>
				<a
					href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</>
	);
}
