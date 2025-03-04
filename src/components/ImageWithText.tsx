import React from "react";
import Image from "next/image";
import styles from "./imagewithtext.module.css";

function ImageWithText() {
	return (
		<section className={styles.sectionWrapper} id="about">
			<div className={styles.textWrapper}>
				<h2 className={styles.introHeading}>
					Creative at heart, developer by trade — <br /> I&apos;m passionate
					about building web experiences that are impactful, purpose-driven and
					accessible.
				</h2>
				<p className={styles.introParagraph}>
					With over a decade of experience in people-focused roles across the
					tech, arts and hospitality industries, I love to collaborate and bring
					curiosity, creativity and care to everything I create.
				</p>
			</div>
			<Image
				className={styles.styledImage}
				src="/emily-profile.jpeg"
				alt=""
				width={800}
				height={800}
				priority={true}
			/>
		</section>
	);
}

export default ImageWithText;
