"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { QUERIES } from "@/constants";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/a11y";

interface Image {
	src: string;
	alt: string;
}

interface ImageCarouselProps {
	images: Array<Image>;
	id: number;
}

function ImageCarousel({ images, id }: ImageCarouselProps) {
	console.log("here are the images", images, id);

	const sliderProps = {
		spaceBetween: 22,
		slidesPerView: 3,
		loopAddBlankSlides: true,
		loop: true,

		breakpoints: {
			1120: {
				slidesPerView: 2,
			},
		},
	};

	// console.log("here are the images", images[0].src);
	return (
		<>
			<SwiperContainer>
				<Swiper
					onSlideChange={(swiper) => console.log("slide change", swiper)}
					modules={[A11y, Autoplay]}
					onSwiper={(swiper) => console.log(swiper)}
					spaceBetween={22}
					slidesPerView={1}
					loopAddBlankSlides={true}
					loop={true}
					// autoplay={{
					// 	delay: 5000,
					// }}
					breakpoints={{
						720: {
							slidesPerView: 3,
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
		</>
	);
}

const StyledImage = styled(Image)`
	aspect-ratio: 5/3;
	object-fit: cover;
	min-width: 0; // to ensure that image will scale smaller
	border-radius: 14px;
`;
const SwiperContainer = styled.div`
	margin-inline: calc(-1 * var(--desktop-horizontal-margin) * 1.5);

	@media ${QUERIES.mobileAndDown} {
		margin-inline: 48px;
	}

	@media ${QUERIES.smallMobileAndDown} {
		margin-inline: 24px;
	}

	.swiper-slide {
		height: 279px;
		flex-shrink: 0;
		display: flex;
	}
`;

const SlideShowWrapper = styled.div`
	display: flex;
	gap: 22px;
	margin-inline: calc(-1 * var(--desktop-horizontal-margin) * 1.5);
	overflow: hidden;
	position: relative;
	min-width: 100vw;
`;
const SlideShowImage = styled.div`
	min-width: 462px;
	height: 279px;
	border: 1px solid black;
	border-radius: 14px;
`;

export default ImageCarousel;
