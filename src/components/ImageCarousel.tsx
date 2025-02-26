"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { QUERIES } from "@/constants";
import { A11y, Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/navigation";

interface Image {
	src: string;
	alt: string;
}

interface ImageCarouselProps {
	images: Array<Image>;
	id: number;
}

function ImageCarousel({ images, id }: ImageCarouselProps) {
	return (
		<>
			<SwiperContainer>
				<Swiper
					onSlideChange={(swiper) => console.log("slide change", swiper)}
					modules={[A11y, Autoplay]}
					onSwiper={(swiper) => console.log(swiper)}
					spaceBetween={48}
					slidesPerView={1}
					// loopAddBlankSlides={true}
					// loop={true}
					// autoplay={{
					// 	delay: 5000,
					// }}
					breakpoints={{
						1700: {
							slidesPerView: 4,
						},
						1440: {
							slidesPerView: 3,
						},
						1120: {
							slidesPerView: 2,
						},
						608: {
							slidesPerView: 2,
						},
					}}
				>
					{images.map((image, index) => (
						<SwiperSlide key={index}>
							<StyledImage src={image.src} alt={image.alt} fill={true} />
						</SwiperSlide>
					))}
				</Swiper>
			</SwiperContainer>
			<ArrowContainer>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="#23232"
				>
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z" />
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					height="24px"
					viewBox="0 0 24 24"
					width="24px"
					fill="#23232"
				>
					<path d="M0 0h24v24H0V0z" fill="none" />
					<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
				</svg>
			</ArrowContainer>
		</>
	);
}

const ArrowContainer = styled.div`
	display: flex;
	justify-content: center;
	gap: var(--space-m);
	margin-top: var(--space-m);
`;
const StyledImage = styled(Image)`
	aspect-ratio: 5/3;
	object-fit: cover;
	min-width: 0; // to ensure that image will scale smaller
	border-radius: 14px;
`;
const SwiperContainer = styled.div`
	margin-inline: calc(-1 * var(--desktop-horizontal-margin) * 1.5);

	@media ${QUERIES.mobileAndDown} {
		margin-inline: var(--space-xl-2);
	}

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: var(--space-l);
	}

	.swiper-slide {
		height: 279px;
		flex-shrink: 0;
		display: flex;
	}
`;

export default ImageCarousel;
