import React from "react";
import { projectOverviewData, contactLinks } from "../data/ProjectData";
import ImageWithText from "@/components/ImageWithText";
import ProjectOverview from "@/components/ProjectOverview";
import StrikethroughLink from "@/components/Links/StrikethroughLink";
import { tektur } from "../fonts";
import styles from "./homepage.module.css";

function Homepage() {
	return (
		<>
			<section className={styles.introSection}>
				<h1 className={`${tektur.className} ${styles.title}`}>
					Emily <br />
					<span>Berryman</span>
					<br />
					Web Developer
				</h1>
			</section>
			<ImageWithText />
			<section className={styles.workSection}>
				<h2 id="work" className={styles.sectionHeading}>
					Work
				</h2>
			</section>
			<ProjectOverview projects={projectOverviewData} />
			<section className={styles.contactSection}>
				<h3 id="contact" className={styles.contactHeading}>
					Contact
				</h3>
				<p className={styles.contactDescription}>
					I&apos;m based between Wellington / Melbourne and am available for
					remote work opportunities.
				</p>
				<div className={styles.linkWrapper}>
					{contactLinks.map((link, index) => (
						<React.Fragment key={index}>
							<StrikethroughLink
								href={link.href}
								ariaLabel={link.ariaLabel}
								linkText={link.linkText}
								target={link.target}
								rel={link.rel}
							/>
							{index < contactLinks.length - 1 && "-"}
						</React.Fragment>
					))}
				</div>
			</section>
		</>
	);
}

export default Homepage;
