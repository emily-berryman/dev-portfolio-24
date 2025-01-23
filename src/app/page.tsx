"use client";
import React from "react";
import styled from "styled-components";
import Footer from "@/components/Footer";
import ImageWithText from "@/components/ImageWithText";
import Spacer from "@/components/Spacer";
import ProjectOverview from "@/components/ProjectOverview";
import StrikethroughLink from "@/components/Link/StrikethroughLink";

export default function Home() {
	const projects = [
		{
			id: 1,
			title: "Ka Ora Ka Ako",
			description:
				"Regular body text. Duis nisi nibh, lobortis at interdum eu, pretium non ante. Cras bibendum",
		},
		{
			id: 2,
			title: "NCEA",
			description:
				"Regular body text. Duis nisi nibh, lobortis at interdum eu, pretium non ante. Cras bibendum",
		},
	];

	return (
		<>
			<IntroSection>
				<Title>
					<span>Emily Berryman</span>
					<br /> Web Developer
				</Title>
			</IntroSection>
			<Spacer size={160} />
			<ImageWithText />
			<WorkSection>
				<SectionHeading id="work">Work</SectionHeading>
			</WorkSection>
			<ProjectSection>
				<ProjectOverview projects={projects} />
			</ProjectSection>
			{/* <Spacer size={384} /> */}
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
			<Footer />
		</>
	);
}

const IntroSection = styled.section`
	padding: var(--desktop-padding-standard);
	padding-top: 152px;
`;

const Title = styled.h1`
	font-family: var(--font-family-title);
	font-weight: var(--font-weight-bold);
	font-size: 5.93rem;

	span {
		display: inline-block;
		width: min-content;
		padding-bottom: 48px;
	}
`;

const WorkSection = styled.section`
	padding: var(--desktop-padding-standard);
`;

const ProjectSection = styled.section`
	display: block;
`;

const SectionHeading = styled.h2`
	font-weight: var(--font-weight-semi-bold);
	font-size: var(--font-size-title);
	text-transform: uppercase;
	padding-top: 49px;
	flex-basis: 33%;
`;

const ContactSection = styled.section`
	background-color: var(--light-gray);
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	min-height: 180px;
	padding: 48px 152px;
	gap: 32px;
	border-top: 1px solid black;
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
	gap: 16px;
	font-size: var(--font-size-small);
`;
