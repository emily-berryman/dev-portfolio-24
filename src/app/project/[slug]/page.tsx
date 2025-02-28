"use client";
import React from "react";
import { useParams } from "next/navigation";
import styled from "styled-components";
import Button from "@/components/Button/Button";
import { QUERIES } from "@/constants";
import { ArrowRight, Minus } from "lucide-react";
import { projectCaseStudyData } from "@/data/ProjectData";

function page() {
	const { slug } = useParams<{ slug: string }>();

	const project = slug
		? projectCaseStudyData.find((project) => project.projectURL === slug)
		: null;

	if (!project) {
		return <div> Project not found</div>;
	}

	return (
		<>
			<Container>
				<ProjectHeading>{project.projectTitle}</ProjectHeading>
				<ProjectOverviewSection>
					{project.projectOverviewSection.map((overview, key) => (
						<React.Fragment key={key}>
							<ImgWrapper>
								<StyledImage src={overview.imgSrc} alt={overview.alt} />
							</ImgWrapper>
							<TextOverviewWrapper>
								{overview.projectSummary.map((paragraph, index) => (
									<p key={index}>{paragraph}</p>
								))}
								<StackAndLinkContainer>
									<StackWrapper>
										<SubHeading>Stack</SubHeading>
										<StackList>
											{overview.techStack.map((stack, index) => (
												<li key={index}>
													<HyphenWrapper>
														<Minus size={17} />
													</HyphenWrapper>{" "}
													{stack}
												</li>
											))}
										</StackList>
									</StackWrapper>
									<SiteUrlContainer>
										<SubHeading>LIVE</SubHeading>
										<Button
											target={"_blank"}
											rel="noopener noreferrer"
											href={overview.siteURL}
										>
											View Site
										</Button>
									</SiteUrlContainer>
								</StackAndLinkContainer>
							</TextOverviewWrapper>
						</React.Fragment>
					))}
				</ProjectOverviewSection>
			</Container>
			<Spacer />
			<GreyBackroundWrapper>
				<Container>
					<ProjectFunctionalitySection>
						<TextWrapper>
							<SubHeading>Project Purpose + Goal</SubHeading>
							{project.projectPurpose.map((purpose, index) => (
								<p key={index}>{purpose}</p>
							))}
						</TextWrapper>
						<ImageAndTextWrapper>
							{project.projectPurposeImage.map((image, index) => (
								<ImgWrapper key={index}>
									<TransparentImage src={image.imageSrc} alt={image.alt} />
								</ImgWrapper>
							))}
							<FeaturesWrapper>
								<SubHeading>Core Functionality</SubHeading>
								<FeaturesList>
									{project.projectFunctionality.map((functionality, index) => (
										<li key={index}>
											<ArrowWrapper>
												<ArrowRight size={16} />
											</ArrowWrapper>
											<span>
												<Highlight>{functionality.function}</Highlight> -{" "}
												{functionality.description}
											</span>
										</li>
									))}
								</FeaturesList>
							</FeaturesWrapper>
						</ImageAndTextWrapper>
					</ProjectFunctionalitySection>
				</Container>
			</GreyBackroundWrapper>
			<Spacer />
			<Container>
				<LessonsLearnedSection>
					<TextWrapper>
						<SubHeading>Lessons Learned</SubHeading>
						{project.lessonsLearned.map((lesson, index) => (
							<React.Fragment key={index}>
								<HighlightParagraph>{lesson.title}</HighlightParagraph>
								<p>{lesson.description}</p>
							</React.Fragment>
						))}
					</TextWrapper>
				</LessonsLearnedSection>
				{project.lessonsLearnedImg.map((image, index) => (
					<LessonsLearnedImgWrapper key={index}>
						<img src={image.imageSrc} alt={image.alt} />
					</LessonsLearnedImgWrapper>
				))}
			</Container>
			<Spacer />
		</>
	);
}

const Spacer = styled.span`
	display: inline-block;
	height: var(--space-xl-4);

	@media ${QUERIES.tabletAndDown} {
		height: var(--space-xl-3);
	}
`;

const ArrowWrapper = styled.span`
	transform: translateY(2px);
`;

const HyphenWrapper = styled.span`
	display: inline-block;

	svg {
		transform: translateY(4px);
	}
`;

const HighlightParagraph = styled.p`
	font-size: var(--font-size-h3);
`;

const LessonsLearnedSection = styled.div`
	display: flex;
	gap: var(--space-xl-2);
`;

const TransparentImage = styled.img`
	min-width: 0;
`;

const StackWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;
const ImageAndTextWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--space-l);

	@media (max-width: 57.5rem) {
		flex-direction: column;
		align-items: flex-start;
	}
`;

const FeatureHeading = styled.h3`
	font-size: var(--font-size-h4);
	text-transform: uppercase;
	margin-bottom: var(--space-l);
`;

const Highlight = styled.strong`
	background-color: var(--primary-color--light);
	padding: 1px 6px;
	border-radius: 3px;
`;
const FeaturesList = styled.ul`
	li {
		gap: var(--space-xs);
		display: flex;
		align-items: flex-start;
		margin-bottom: var(--space-m);
	}
`;

const FeaturesWrapper = styled.div`
	max-width: max(40%, 352px);
	margin-left: auto;

	@media (max-width: 57.5rem) {
		margin-top: var(--space-l);
		margin-left: 0;
		max-width: fit-content;
	}

	@media ${QUERIES.mobileAndDown} {
		max-width: 100%;
	}
`;

const ProjectFunctionalitySection = styled.div`
	display: flex;
	padding: var(--space-xl-2) 0;
	flex-direction: column;
`;

const GreyBackroundWrapper = styled.div`
	background-color: var(--light-grey);
`;

const TextWrapper = styled.div`
	max-width: max(60%, 400px);

	@media (max-width: 57.5rem) {
		max-width: 100%;
	}
`;

const ImgWrapper = styled.div`
	display: flex;
	min-width: 0;
	height: min-content;
	width: 100%;
	flex: 1 1 60%;
`;

const LessonsLearnedImgWrapper = styled.div`
	display: flex;
	margin-top: var(--space-xl-2);
	justify-content: flex-end;
	width: 100%;
	height: 100%;

	img {
		max-width: 60%;
		border-radius: var(--space-s);
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
		min-width: 0; // to ensure that image will scale smaller

		@media ${QUERIES.tabletAndDown} {
			max-width: 100%;
		}
	}
`;

const StackAndLinkContainer = styled.div`
	display: flex;
	align-items: flex-start;
	margin-top: var(--space-l);
	justify-content: space-between;
	max-width: 80%;

	@media ${QUERIES.mobileAndDown} {
		flex-direction: column;
		gap: var(--space-xl);
		max-width: 100%;
	}
`;

const SiteUrlContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media ${QUERIES.mobileAndDown} {
		align-items: flex-start;
	}
`;

const SubHeading = styled.h2`
	font-size: var(--font-size-h3);
	text-transform: uppercase;
	margin-bottom: var(--space-l);
`;

const StackList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: var(--space-s);
	max-width: max-content;
	flex-direction: column;

	@media ${QUERIES.mobileAndDown} {
		flex-direction: row;
	}
`;

const StyledImage = styled.img`
	object-fit: contain;
	border-radius: var(--space-s);
	object-position: top;
	box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	min-width: 0; // to ensure that image will scale smaller
`;

const TextOverviewWrapper = styled.div`
	flex: 1 1 40%;
`;

const ProjectHeading = styled.h1`
	font-weight: var(--font-weight-semi-bold);
	font-size: var(--font-size-h1);
	text-transform: uppercase;
	margin-top: var(--space-xl-3);
`;

const Container = styled.div`
	margin-inline: var(--space-xl-6);

	@media ${QUERIES.tabletAndDown} {
		margin-inline: var(--space-xl-4);
	}

	@media ${QUERIES.mobileAndDown} {
		margin-inline: var(--space-xl-2);
	}

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: var(--space-l);
	}
`;

const ProjectOverviewSection = styled.section`
	display: flex;
	gap: var(--space-xl-3);
	margin-top: var(--space-xl-2);

	@media ${QUERIES.tabletAndDown} {
		flex-flow: column-reverse;
		gap: var(--space-xl);
	}
`;

export default page;
