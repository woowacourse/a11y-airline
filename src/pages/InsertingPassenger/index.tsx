import { ChangeEvent, useState } from 'react';

import { Button } from '@/common/Button/Button.styles';
import { Input } from '@/common/Input/Input.styles';
import ChipButton from '@/common/ChipButton/ChipButton';

import * as S from '@/pages/InsertingPassenger/index.styles';

const InsertingPassenger = () => {
	const [peopleCount, setPeopleCount] = useState<number>(0);

	const onMinusButtonClick = () => {
		if (peopleCount === 0) {
			window.alert('0명 미만의 인원은 선택하실 수 없습니다');
			return;
		}
		setPeopleCount(peopleCount - 1);
	};

	const onPlusButtonClick = () => {
		if (peopleCount === 3) {
			window.alert('3명을 초과하는 인원은 선택하실 수 없습니다');
			return;
		}
		setPeopleCount(peopleCount + 1);
	};

	const onInsertPeopleCount = (e: ChangeEvent<HTMLInputElement>) => {
		if (Number(e.target.value) > 3 || Number(e.target.value) < 0) {
			alert('0 미만, 3 초과의 인원 수는 입력하실 수 없습니다');
			return;
		}
		setPeopleCount(Number(e.target.value));
	};

	return (
		<S.Container>
			<S.Title>승객 선택</S.Title>
			<S.ContentContainer>
				<S.SubInfo>
					<S.PeopleType>성인</S.PeopleType>
					<ChipButton />
				</S.SubInfo>
				<S.InputContainer>
					<Button aria-label="성인 탑승자 한명 줄이기" onClick={onMinusButtonClick}>
						-
					</Button>
					<Input
						type="number"
						min={0}
						max={3}
						value={peopleCount}
						aria-label="인원"
						onChange={onInsertPeopleCount}
					/>
					<Button aria-label="성인 탑승자 한명 늘리기" onClick={onPlusButtonClick}>
						+
					</Button>
				</S.InputContainer>
			</S.ContentContainer>
		</S.Container>
	);
};
export default InsertingPassenger;
