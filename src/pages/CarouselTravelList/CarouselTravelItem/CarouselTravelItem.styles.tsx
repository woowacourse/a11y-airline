import styled from '@emotion/styled';
export const CarouselItem = styled.li`
	position: relative;

	width: fit-content;

	list-style: none;
	margin-right: 20px;
	margin-left: 0;
	padding: 0;
`;

export const LinkItem = styled.a``;

export const CarouselDescriptionBox = styled.div`
	position: absolute;
	top: 10px;
	left: 20px;
`;

export const Image = styled.img`
	width: 20vw;
	min-width: 200px;

	object-fit: contain;
`;

export const TravelTitle = styled.p`
	font-size: 1rem;
	font-weight: bold;
	color: black;
`;

export const TravelPrice = styled.p`
	font-size: 1rem;
	text-decoration: none;
	font-weight: bold;
	color: black;
`;

export const TravelSeat = styled.p`
	font-size: 1rem;
	text-decoration: none;
	color: black;
`;
