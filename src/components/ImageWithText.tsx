"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";
import { QUERIES } from "@/constants";

function ImageWithText() {
	return (
		<SectionWrapper id="about">
			<ImgWrapper>
				<StyledImage src="/abstract.png" alt="" width={279} height={279} />
			</ImgWrapper>
			<TextWrapper>
				<h2>About</h2>
				<p>
					Regular body text. Duis nisi nibh, lobortis at interdum eu, pretium
					non ante. Cras bibendum Vestibulum ex nisl, consectetur id augue ac,
					fringilla suscipit metus. Duis turpis mi, dignissim bibendum odio
					quis, tempus dapibus nunc. Sed eu ipsum felis. Nulla facilisi.
					Praesent interdum lacus eu consectetur fermentum. Interdum et
					malesuada fames ac ante ipsum primis in faucibus. Etiam consectetur
					vehicula rutrum.
				</p>
			</TextWrapper>
		</SectionWrapper>
	);
}

// const FullWidth = styled.div`
// 	grid-column: 1 / -1;
// 	background-color: pink;
// `;
const SectionWrapper = styled.section`
	background-color: var(--light-grey);
	display: flex;
	flex-wrap: wrap;
	gap: 48px;
	/* display: grid; */
	/* grid-template-rows: 1fr;
	grid-template-columns: 1fr min(50ch, 100%) 1fr; */
	padding: 48px 152px;

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

const ImgWrapper = styled.div`
	display: flex;
	min-width: 0;
`;

const StyledImage = styled(Image)`
	aspect-ratio: 1/1;
	object-fit: cover;
	min-width: 0; // to ensure that image will scale smaller
`;

const TextWrapper = styled.div`
	flex: 1 1 290px;

	@media ${QUERIES.laptopAndDown} {
		max-width: 35ch;
	}

	@media ${QUERIES.laptopAndDown} {
		max-width: 30ch;
	}
	@media (max-width: 48.5rem) {
		max-width: fit-content;
	}

	h2 {
		font-size: var(--font-size-h3);
		padding-bottom: 16px;
		text-transform: uppercase;
	}
`;

export default ImageWithText;
