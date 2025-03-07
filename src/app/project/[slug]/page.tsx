import React from "react";
import Button from "@/components/Links/ButtonLink";
import { ArrowRight, Minus } from "lucide-react";
import { projectCaseStudyData } from "@/data/ProjectData";
import Image from "next/image";
import styles from "./projectpage.module.css";

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const project = slug
		? projectCaseStudyData.find((project) => project.projectURL === slug)
		: null;

	if (!project) {
		return <div>Project not found</div>;
	}

	return (
		<>
			<div className={styles.container}>
				<h1 className={styles.projectHeading}>{project.projectTitle}</h1>
				<section className={styles.projectOverviewSection}>
					{project.projectOverviewSection.map((overview, key) => (
						<React.Fragment key={key}>
							<div className={styles.imgWrapper}>
								<Image
									className={styles.styledImage}
									width={overview.width}
									height={overview.height}
									src={overview.imgSrc}
									alt={overview.alt}
								/>
							</div>
							<div className={styles.textOverviewWrapper}>
								{overview.projectSummary.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
								<div className={styles.stackAndLinkContainer}>
									<div className={styles.stackWrapper}>
										<h2 className={styles.subHeading}>Stack</h2>
										<ul className={styles.stackList}>
											{overview.techStack.map((stack, index) => (
												<li key={index}>
													<span className={styles.hyphenWrapper}>
														<Minus size={17} />
													</span>{" "}
													{stack}
												</li>
											))}
										</ul>
									</div>
									<div className={styles.siteUrlContainer}>
										<h2 className={styles.subHeading}>LIVE</h2>
										<Button
											target={"_blank"}
											rel="noopener noreferrer"
											href={overview.siteURL}
										>
											View Site
										</Button>
									</div>
								</div>
							</div>
						</React.Fragment>
					))}
				</section>
			</div>
			<span className={styles.spacer} />
			<div className={styles.greyBackgroundWrapper}>
				<div className={styles.container}>
					<section className={styles.projectFunctionalitySection}>
						<div className={styles.textWrapper}>
							<h2 className={styles.subHeading}>Project Purpose + Goal</h2>
							{project.projectPurpose.map((purpose, index) => (
								<p key={index}>{purpose}</p>
							))}
						</div>
						<div className={styles.imageAndTextWrapper}>
							{project.projectPurposeImage.map((image, index) => (
								<div
									className={`${styles.imgWrapper} ${
										index === 0 && styles.noBoxShadow
									}`}
									key={index}
								>
									<Image
										priority
										className={styles.styledImage}
										src={image.imageSrc}
										alt={image.alt}
										width={image.width}
										height={image.height}
									/>
								</div>
							))}
							<div className={styles.featuresWrapper}>
								<h2 className={styles.subHeading}>Core Functionality</h2>
								<ul>
									{project.projectFunctionality.map((functionality, index) => (
										<li className={styles.featuresListItem} key={index}>
											<div className={styles.arrowWrapper}>
												<ArrowRight size={16} />
											</div>
											<span>
												<strong className={styles.highlight}>
													{functionality.function}
												</strong>{" "}
												- {functionality.description}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</section>
				</div>
			</div>
			<span className={styles.spacer} />
			<div className={styles.container}>
				<section className={styles.lessonLearnedSection}>
					<div className={styles.textWrapper}>
						<h2 className={styles.subHeading}>Lessons Learned</h2>
						{project.lessonsLearned.map((lesson, index) => (
							<React.Fragment key={index}>
								{lesson.title && (
									<h3 className={styles.lessonTitle}>{lesson.title}</h3>
								)}
								<p>{lesson.description}</p>
							</React.Fragment>
						))}
					</div>
				</section>
				{project.lessonsLearnedImg.map((image, index) => (
					<div className={styles.lessonsLearnedImgWrapper} key={index}>
						<Image
							className={styles.styledImage}
							src={image.imageSrc}
							alt={image.alt}
							width={image.width}
							height={image.height}
						/>
					</div>
				))}
			</div>
			<span className={styles.spacer} />
		</>
	);
}
