"use client";
import React from "react";
import { QUERIES } from "@/constants";
import styled from "styled-components";
import Button from "./Button/Button";

interface Image {
	src: string;
	alt: string;
	title?: string;
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
					<ProjectDetailsWrapper>
						<ProjectHeading>{project.title}</ProjectHeading>
						<ProjectDescription>{project.description}</ProjectDescription>
						<LinkWrapper>
							<Button target={"_self"} href={project.url}>
								View Project
							</Button>
						</LinkWrapper>
					</ProjectDetailsWrapper>
					{/* Project Images */}
					<MultiImageWrapper>
						{project.images.map((image, index) => (
							<ImageWrapper key={index} index={index}>
								<StyledImage src={image.src} alt={image.alt} />
							</ImageWrapper>
						))}
					</MultiImageWrapper>
					<Spacer />
				</React.Fragment>
			))}
		</>
	);
}

const MultiImageWrapper = styled.div`
	display: flex;
	margin-inline: var(--space-xl-2);
	gap: var(--space-l);

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: var(--space-l);
	}
`;

const ImageWrapper = styled.div<{ index: number }>`
	display: flex;
	width: 100%;
	flex: 1;
	border-radius: 8px;
	overflow: hidden;
	max-height: 500px;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

	${({ index }) =>
		index === 1 &&
		`@media (max-width: 900px) {
			display: none;
		 }`}

	${({ index }) =>
		index === 2 &&
		`	@media ${QUERIES.laptopAndDown} {
			display: none;
		}`}
`;

const Spacer = styled.span`
	display: inline-block;
	height: 200px;

	@media ${QUERIES.tabletAndDown} {
		height: 148px;
	}
`;

const StyledImage = styled.img`
	object-fit: cover;
	border-radius: 4px;
	overflow: hidden;
	aspect-ratio: 4/3;
`;

const ProjectDetailsWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	margin-inline: var(--space-xl-2);
	margin-bottom: var(--space-l);
	gap: var(--space-l);

	@media ${QUERIES.tabletAndDown} {
		flex-direction: column;
		margin-bottom: var(--space-xl-2);
	}

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: var(--space-l);
	}
`;

const ProjectHeading = styled.h3`
	font-size: var(--font-size-h2);
	text-transform: uppercase;
	flex-basis: 25%;
`;

const ProjectDescription = styled.span`
	font-size: var(--font-size-h3);
	display: inline-block;
	flex-basis: 50%;

	@media ${QUERIES.tabletAndDown} {
		margin-top: -8px; // to account for line height
	}
`;

const LinkWrapper = styled.div`
	display: flex;
	flex-basis: 25%;
	justify-content: flex-end;
`;

export default ProjectOverview;
