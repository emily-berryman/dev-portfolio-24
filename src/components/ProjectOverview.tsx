"use client";

import React from "react";
import { QUERIES } from "@/constants";
import styled from "styled-components";
import Spacer from "./Spacer";
import ImageCarousel from "./ImageCarousel";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Button from "./Button/Button";

interface Image {
	src: string;
	alt: string;
}

interface Project {
	id: number;
	title: string;
	description: string;
	images: Array<Image>;
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
								<Button
									variant={"primary"}
									target={"_self"}
									href={"case-study"}
								>
									Case Study
								</Button>
							</LinkWrapper>
						</ProjectDetailsWrapper>
						<ImageCarousel id={project.id} images={project.images} />
					</ProjectWrapper>
					<Spacer size={288} />
				</React.Fragment>
			))}
		</>
	);
}

const ProjectDetailsWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	padding-bottom: 66px;
	margin-inline: 152px;
	gap: 24px;

	@media ${QUERIES.tabletAndDown} {
		margin-inline: 80px;
		flex-direction: column;
	}

	@media ${QUERIES.mobileAndDown} {
		margin-inline: 48px;
	}

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: 24px;
	}
`;

const ProjectWrapper = styled.div`
	padding-top: 48px;
`;

const ProjectHeading = styled.h3`
	font-size: var(--font-size-h3);
	text-transform: uppercase;
	/* padding-bottom: 16px; */
	flex-basis: 33.33%;
`;

const ProjectDescription = styled.span`
	display: inline-block;
	flex-basis: 33.33%;
`;

const LinkWrapper = styled.div`
	display: flex;
	justify-content: center;
	flex-basis: 33.33%;
`;

export default ProjectOverview;
