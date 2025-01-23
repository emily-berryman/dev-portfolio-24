"use client";

import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Spacer from "./Spacer";
import ImageCarousel from "./ImageCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "./Button/Button";

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
							{/* <LinkWrapper>
								<Link href={"case-study"} passHref legacyBehavior>
									<CaseStudyLink target="_self">Case Study</CaseStudyLink>
								</Link>
							</LinkWrapper> */}
							<LinkWrapper>
								<Button
									variant={"primary"}
									target={"_self"}
									href={"case-study"}
								>
									Case Study
								</Button>
							</LinkWrapper>
						</ProjectDetailsWrapper>
						<ImageCarousel />
					</ProjectWrapper>
					<Spacer size={288} />
				</React.Fragment>
			))}
		</>
	);
}

const ProjectDetailsWrapper = styled.div`
	display: flex;
	padding: var(--desktop-padding-standard);
	align-items: flex-start;
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

export default ProjectOverview;
