"use client";

import React from "react";
import Image from "next/image";
import styled from "styled-components";

function ImageWithText() {
	return (
		<SectionWrapper id="about">
			<ImgWrapper>
				<Image src="/abstract.png" alt="" width={279} height={279} />
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

const SectionWrapper = styled.section`
	background-color: var(--light-gray);
	display: flex;
	padding: 48px 0;
	gap: 48px;
`;

const ImgWrapper = styled.div`
	flex-basis: 33.3%;
	display: flex;
	justify-content: flex-end;
`;

const TextWrapper = styled.div`
	flex-basis: 66.6%;
	max-width: 291px;

	h2 {
		font-size: var(--font-size-h3);
		padding-bottom: 16px;
		text-transform: uppercase;
	}
`;

export default ImageWithText;
