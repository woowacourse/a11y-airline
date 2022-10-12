import styled from '@emotion/styled';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	width: 100vw;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h2``;

export const CarouselContainer = styled.ul`
	display: flex;
	position: relative;
	width: 80vw;

	gap: 20px;
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
