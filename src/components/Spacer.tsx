"use client";

import React from "react";
import styled from "styled-components";

interface SpacerProps {
	size: number;
}

const Spacer: React.FC<SpacerProps> = ({ size }) => {
	return <CustomSpan size={size} />;
};

const CustomSpan = styled.span<{ size: number }>`
	display: inline-block;
	height: ${(props) => props.size}px;
`;

export default Spacer;
