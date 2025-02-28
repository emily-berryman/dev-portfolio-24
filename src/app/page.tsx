"use client";
import React from "react";
import { QUERIES } from "@/constants";
import styled from "styled-components";
import { projectOverviewData, contactLinks } from "../data/ProjectData";
import ImageWithText from "@/components/ImageWithText";
import ProjectOverview from "@/components/ProjectOverview";
import StrikethroughLink from "@/components/Link/StrikethroughLink";

export default function Page() {
	return (
		<>
			<IntroSection>
				<Title>
					Emily <br />
					<SpacingSpan>Berryman</SpacingSpan>
					<br />
					Web Developer
				</Title>
			</IntroSection>
			<ImageWithText />
			<WorkSection>
				<SectionHeading id="work">Work</SectionHeading>
			</WorkSection>
			<ProjectOverview projects={projectOverviewData} />
			<ContactSection>
				<ContactHeading id="contact">Contact</ContactHeading>
				<ContactDescription>
					I&apos;m based between Wellington / Melbourne and am available for
					remote work opportunities.
				</ContactDescription>
				<LinkWrapper>
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
				</LinkWrapper>
			</ContactSection>
		</>
	);
}

const IntroSection = styled.section`
	margin: var(--space-xl-6);

	@media ${QUERIES.tabletAndDown} {
		margin-inline: var(--space-xl-2);
	}

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: var(--space-l);
	}
`;

const Title = styled.h1`
	font-family: "Tektur", "serif";
	font-weight: var(--font-weight-bold);
	font-size: 5.937rem;
	min-width: fit-content;

	@media ${QUERIES.tabletAndDown} {
		font-size: 5rem;
	}

	@media ${QUERIES.mobileAndDown} {
		font-size: 4rem;
	}

	@media ${QUERIES.smallMobileAndDown} {
		font-size: 3rem;
	}
`;

const SpacingSpan = styled.span`
	margin-bottom: var(--space-xl-2);
	display: inline-block;

	@media ${QUERIES.mobileAndDown} {
		margin-bottom: var(--space-l);
	}
`;

const WorkSection = styled.section`
	margin: 0 var(--space-xl-2) var(--space-xl-2);

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: var(--space-l);
	}
`;

const SectionHeading = styled.h2`
	font-weight: var(--font-weight-semi-bold);
	font-size: var(--font-size-h1);
	text-transform: uppercase;
	margin-top: var(--space-xl-2);
	flex-basis: 33%;
`;

const ContactSection = styled.section`
	background-color: var(--light-grey);
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	gap: var(--space-xl);
	border-top: 1px solid var(--medium-grey);
	padding: var(--space-xl-2);

	@media ${QUERIES.smallMobileAndDown} {
		padding-inline: var(--space-l);
	}
`;

const ContactHeading = styled.h3`
	font-size: var(--font-size-h3);
	text-transform: uppercase;
`;

const ContactDescription = styled.p`
	font-size: var(--font-size-small);
`;

const LinkWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-m);
	font-size: var(--font-size-small);
`;
