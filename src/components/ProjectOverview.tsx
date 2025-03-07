import React from "react";
import Button from "./Links/ButtonLink";
import styles from "./projectoverview.module.css";
import Image from "next/image";

interface Image {
	src: string;
	alt: string;
	title?: string;
	width: number;
	height: number;
}

interface ProjectOverviews {
	id: number;
	title: string;
	description: string;
	url: string;
	images: Array<Image>;
}

interface Props {
	projects: ProjectOverviews[];
}

function ProjectOverview({ projects }: Props) {
	return (
		<>
			{projects.map((project) => (
				<React.Fragment key={project.id}>
					{/* Project Details */}
					<div className={styles.projectDetailsWrapper}>
						<h3 className={styles.projectHeading}>{project.title}</h3>
						<span className={styles.projectDescription}>
							{project.description}
						</span>
						<div className={styles.linkWrapper}>
							<Button target={"_self"} href={project.url} passHref>
								Case Study
							</Button>
						</div>
					</div>
					{/* Project Images */}
					<div className={styles.multiImageWrapper}>
						{project.images.map((image, index) => (
							<div
								key={index}
								className={`${styles.imageWrapper} ${
									index === 1 && styles.hideOnMobile
								} ${index === 2 && styles.hideOnLaptop}`}
							>
								<Image
									className={styles.styledImage}
									width={image.width}
									height={image.height}
									src={image.src}
									alt={image.alt}
								/>
							</div>
						))}
					</div>
					<span className={styles.spacer} />
				</React.Fragment>
			))}
		</>
	);
}

export default ProjectOverview;
