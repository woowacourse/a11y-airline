import styled from '@emotion/styled';

export const Container = styled.main`
	display: flex;
	flex-direction: column;

	width: 100vw;
	height: 100vh;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.h2``;

export const ContentContainer = styled.section``;

export const SubInfo = styled.div`
	display: flex;
	gap: 15px;

	align-items: center;
	justify-content: center;
`;

export const PeopleType = styled.label``;

export const InputContainer = styled.div`
	display: flex;
	gap: 15px;
	margin-top: 50px;
`;

export const DisplayContent = styled.div`
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
