"use client";
import React from "react";
import { QUERIES } from "@/constants";
import styled from "styled-components";
import ImageWithText from "@/components/ImageWithText";
import Spacer from "@/components/Spacer";
import ProjectOverview from "@/components/ProjectOverview";
import StrikethroughLink from "@/components/Link/StrikethroughLink";
import car1 from "../../public/car-1.jpg";
import car2 from "../../public/car-2.jpg";
import car3 from "../../public/car-3.jpg";
import car4 from "../../public/car-4.jpg";
// import car5 from "../../public/car-5.jpg";
// import ImageSlider from "@/components/ImageSlider";

export default function Home() {
	const projects = [
		{
			id: 1,
			title: "Ka Ora Ka Ako",
			description:
				"Regular body text. Duis nisi nibh, lobortis at interdum eu, pretium non ante. Cras bibendum",
			images: [
				{
					src: "/car-1.jpg",
					alt: "koka recipe library",
					title: "recipe page homepage",
				},
				{
					src: "/car-2.jpg",
					alt: "koka recipe library",
					title: "recipe page homepage",
				},
				{
					src: "/car-3.jpg",
					alt: "koka recipe library",
					title: "recipe page homepage",
				},
				{
					src: "/car-4.jpg",
					alt: "koka recipe library",
					title: "recipe page homepage",
				},
			],
		},
		{
			id: 2,
			title: "NCEA",
			description:
				"Regular body text. Duis nisi nibh, lobortis at interdum eu, pretium non ante. Cras bibendum",
			images: [
				{
					src: "/abstract.png",
					alt: "koka recipe library",
					title: "ncea something",
				},
				{
					src: "/abstract.png",
					alt: "abstract",
					title: "abstract thing",
				},
			],
		},
	];

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
			<Spacer size={160} />
			<ImageWithText />
			<WorkSection>
				<SectionHeading id="work">Work</SectionHeading>
			</WorkSection>
			<ProjectOverview projects={projects} />
			<ContactSection>
				<ContactHeading id="contact">Contact</ContactHeading>
				<ContactStatus>
					I&apos;m based in Wellington NZ and am available for remote work
					opportunities.
				</ContactStatus>
				<LinkWrapper>
					<StrikethroughLink
						href="mailto:emilyrberryman@gmail.com"
						linkText="Email"
						color="var(--secondary-blue)"
						target="_blank"
					/>
					-
					<StrikethroughLink
						href="linkedin"
						linkText="LinkedIn"
						color="var(--secondary-blue)"
						target="_blank"
					/>
					-
					<StrikethroughLink
						href="github"
						linkText="github"
						color="var(--secondary-blue)"
						target="_blank"
					/>
				</LinkWrapper>
			</ContactSection>
		</>
	);
}

const IntroSection = styled.section`
	padding-top: 152px;
	margin-inline: var(--desktop-horizontal-margin);

	@media ${QUERIES.tabletAndDown} {
		margin-inline: 80px;
	}

	@media ${QUERIES.mobileAndDown} {
		margin-inline: 48px;
	}

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: 24px;
	}
`;

const Title = styled.h1`
	font-family: var(--font-family-title);
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
	margin-bottom: 48px;
	display: inline-block;

	@media ${QUERIES.mobileAndDown} {
		margin-bottom: 24px;
	}
`;

const WorkSection = styled.section`
	margin-inline: var(--desktop-horizontal-margin);

	@media ${QUERIES.tabletAndDown} {
		margin-inline: 80px;
	}

	@media ${QUERIES.mobileAndDown} {
		margin-inline: 48px;
	}

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: 24px;
	}
`;

const SectionHeading = styled.h2`
	font-weight: var(--font-weight-semi-bold);
	font-size: var(--font-size-h1);
	text-transform: uppercase;
	padding-top: 49px;
	flex-basis: 33%;
`;

const ContactSection = styled.section`
	background-color: var(--light-grey);
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	min-height: 180px;
	padding: 48px var(--desktop-horizontal-margin);
	gap: 32px;
	border-top: 1px solid black;

	@media ${QUERIES.tabletAndDown} {
		padding-left: 80px;
		padding-right: 80px;
	}

	@media ${QUERIES.mobileAndDown} {
		padding-left: 48px;
		padding-right: 48px;
	}

	@media ${QUERIES.smallMobileAndDown} {
		padding-left: 24px;
		padding-right: 24px;
	}
`;

const ContactHeading = styled.h3`
	font-size: var(--font-size-h3);
	text-transform: uppercase;
`;

const ContactStatus = styled.p`
	font-size: var(--font-size-small);
`;

const LinkWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
	font-size: var(--font-size-small);
`;
