"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { QUERIES } from "@/constants";

function ImageWithText() {
	return (
		<SectionWrapper id="about">
			<TextWrapper>
				<IntroHeading>
					Creative at heart, developer by trade — <br /> I&apos;m passionate
					about building web experiences that are impactful, purpose-driven and
					accessible.
				</IntroHeading>
				<IntroParagraph>
					With over a decade of experience in people-focused roles across the
					tech, arts and hospitality industries, I love to collaborate and bring
					curiosity, creativity and care to everything I create.
				</IntroParagraph>
			</TextWrapper>
			<StyledImage src="/emily-profile.jpeg" alt="" width={279} height={279} />
		</SectionWrapper>
	);
}

const IntroHeading = styled.h2`
	font-size: var(--font-size-highlight);
	font-weight: var(--font-weight-light);
	text-transform: uppercase;
	padding-bottom: var(--space-m);

	@media ${QUERIES.tabletAndDown} {
		font-size: var(--font-size-h3);
	}
`;

const IntroParagraph = styled.p`
	font-size: var(--font-size-highlight);

	@media ${QUERIES.tabletAndDown} {
		font-size: var(--font-size-h3);
		margin-bottom: var(--space-xl);
	}
`;

const SectionWrapper = styled.section`
	background-color: var(--light-grey);
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	padding: 200px var(--space-xl-6);

	@media ${QUERIES.tabletAndDown} {
		padding: 150px var(--space-xl-2);
	}

	@media ${QUERIES.smallMobileAndDown} {
		padding-inline: var(--space-xl);
	}
`;

const StyledImage = styled(Image)`
	aspect-ratio: 1/1;
	object-fit: cover;
	min-width: 0;
`;

const TextWrapper = styled.div`
	flex: 1 1 auto;
	max-width: 60%;
	margin-left: auto;

	@media (max-width: 57.5rem) {
		max-width: fit-content;
	}
`;

export default ImageWithText;
