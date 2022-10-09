import styled from '@emotion/styled';

export const Button = styled.button`
	width: 30px;
	height: 30px;

	font-size: 18px;

	border-radius: 50%;
	border: 1px solid black;
	background-color: #ffffff;
	color: #111;

	&:hover,
	&:active {
		background-color: #111;
		color: #fff;
	}
`;
