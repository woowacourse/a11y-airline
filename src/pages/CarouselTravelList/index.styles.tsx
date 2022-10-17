import styled from '@emotion/styled';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

export const Container = styled.section`
	position: relative;
	display: flex;
	flex-direction: column;
	width: 100vw;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h2``;

export const CarouselBox = styled.div`
	width: fit-content;
	position: relative;
`;

export const CarouselContainer = styled.ul`
	display: flex;
	width: 80vw;

	margin: 0;
	padding: 0;

	overflow: hidden;
`;

export const CarouselButtonContainer = styled.div`
	position: absolute;

	width: 100%;

	top: 45%;

	display: flex;
	justify-content: space-between;
`;
export const CarouselButton = styled.button`
	width: 3em;
	height: 3rem;
	background-color: gray;
	border-radius: 0 50% 50% 0;
	border: none;

	&:hover,
	&:active {
		background-color: black;
		cursor: pointer;
	}
`;

export const LeftButton = styled(AiOutlineDoubleLeft)`
	font-size: 20px;
	color: white;
`;
export const RightButton = styled(AiOutlineDoubleRight)`
	font-size: 20px;
	color: white;
`;

export const Description = styled.div`
	text-indent: 9999999;
	border: none;
	clip: rect(0 0 0 0);
	width: 1px;
	height: 1px;
	margin: -1px;
	overflow: hidden;
	padding: 0;
	position: absolute;
`;
