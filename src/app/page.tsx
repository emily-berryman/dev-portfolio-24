"use client";

import React from "react";
import styled from "styled-components";
import Footer from "@/components/Footer";
import ImageWithText from "@/components/ImageWithText";
import Spacer from "@/components/Spacer";
import ProjectOverview from "@/components/ProjectOverview";

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
				<SectionHeading>Work</SectionHeading>
			</WorkSection>
			<ProjectSection>
				<ProjectOverview projects={projects} />
			</ProjectSection>
			<Spacer size={384} />
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
	display: flex;
	flex-direction: column;
`;

const SectionHeading = styled.h2`
	font-weight: var(--font-weight-semi-bold);
	font-size: var(--font-size-title);
	text-transform: uppercase;
	padding-top: 49px;
	flex-basis: 33%;
`;
