"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Spacer from "./Spacer";

interface Project {
	id: number;
	title: string;
	description: string;
}

interface Props {
	projects: Project[]; // projects prop is an array of Project objects, whose shape is defined above
}

function ProjectOverview({ projects }: Props) {
	return (
		<>
			{projects.map((project) => (
				<React.Fragment key={project.id}>
					<ProjectWrapper key={project.id}>
						<ProjectDetailsWrapper>
							<ProjectHeading>{project.title}</ProjectHeading>
							<ProjectDescription>{project.description}</ProjectDescription>
							{/* Info on this here: https://nextjs.org/docs/pages/api-reference/components/link#if-the-child-is-a-custom-component-that-wraps-an-a-tag */}
							<LinkWrapper>
								<Link href={"case-study"} passHref legacyBehavior>
									<CaseStudyLink>Case Study</CaseStudyLink>
								</Link>
							</LinkWrapper>
						</ProjectDetailsWrapper>
						<ImageCarouselWrapper>
							<CarouselImage />
						</ImageCarouselWrapper>
					</ProjectWrapper>
					<Spacer size={128} />
				</React.Fragment>
			))}
		</>
	);
}

const ProjectDetailsWrapper = styled.div`
	display: flex;
	/* flex-direction: column; */
	padding: var(--desktop-padding-standard);

	align-items: flex-start;
	/* padding-top: 40px; */
	padding-bottom: 66px;
`;

const ProjectWrapper = styled.div`
	padding-top: 48px;
`;

const ProjectHeading = styled.h3`
	font-size: var(--font-size-h3);
	text-transform: uppercase;
	padding-bottom: 16px;
	flex-basis: 33%;
`;

const ProjectDescription = styled.span`
	display: inline-block;
	flex-basis: 33%;
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-basis: 33%;
`;

const CaseStudyLink = styled.a`
	border-radius: 14px;
	background-color: white;
	border: #232323 dotted 2px;
	padding: 9px 40px;
	font-size: var(--font-size-tiny);
	text-transform: uppercase;
`;

const ImageCarouselWrapper = styled.section`
	display: flex;
`;

const CarouselImage = styled.div`
	width: 462px;
	height: 279px;
	border: 1px solid black;
	padding-bottom: 45px;
`;

export default ProjectOverview;
