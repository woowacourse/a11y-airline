import styled from '@emotion/styled';

export const Container = styled.div`
	position: relative;
`;

export const ChipButton = styled.button`
	width: 25px;
	height: 25px;

	border: 1px solid gray;
	border-radius: 50%;

	text-align: center;
	align-items: center;

	background-color: white;
	color: black;

	&:active,
	&:hover {
		background-color: black;
		color: white;
	}
`;

export const Message = styled.div((props: { isOpen: boolean }) => ({
	display: props.isOpen ? 'block' : 'none',
	wordBreak: 'break-all',
	position: 'absolute',
	width: '27vw',
	top: '-50px',
	left: '70px',
}));
