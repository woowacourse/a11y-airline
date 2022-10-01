import { Button } from '@/common/Button/Button.styles';
import ChipButton from '@/common/ChipButton/ChipButton';
import { Input } from '@/common/Input/Input.styles';
import * as S from '@/pages/InsertingPassenger/index.styles';

const InsertingPassenger = () => {
	return (
		<S.Container>
			<S.Title>승객 선택</S.Title>
			<S.ContentContainer>
				<S.SubInfo>
					<S.PeopleType>성인</S.PeopleType>
					<ChipButton />
				</S.SubInfo>
				<S.InputContainer>
					<Button aria-label="성인 탑승자 한명 줄이기 버튼">-</Button>
					<Input type="number" min={0} max={3} />
					<Button aria-label="성인 탑승자 한명 늘리기 버튼">+</Button>
				</S.InputContainer>
			</S.ContentContainer>
		</S.Container>
	);
};
export default InsertingPassenger;
