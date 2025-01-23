"use client";

import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

function ImageCarousel() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 4000,
	};
	return (
		<SliderContainer>
			<Slider {...settings}>
				<Slide>1</Slide>
				<Slide>2</Slide>
				<Slide>3</Slide>
				<Slide>4</Slide>
			</Slider>
		</SliderContainer>
	);
}

const SliderContainer = styled.div`
	.slick-list {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
	}

	.slick-track {
		display: flex;
		gap: 22px;
		margin-left: -164px;
	}

	.slick-slide {
		background-color: grey;
		border: 1px solid black;
		height: 279px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.slick-dots {
		bottom: -30px;
	}
`;

const Slide = styled.div``;

export default ImageCarousel;
