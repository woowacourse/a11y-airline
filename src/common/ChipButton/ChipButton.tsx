import * as S from '@/common/ChipButton/ChipButton.styles';
import { useState } from 'react';

const ChipButton = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const showMessage = () => {
		setIsOpen(!isOpen);
	};
	return (
		<S.Container>
			<S.ChipButton type="button" aria-label="안내메세지 보기" onClick={showMessage}>
				?
			</S.ChipButton>
			<S.Message isOpen={isOpen}>
				성인인 승객의 인원 수를 아래의 +, - 버튼 또는 직접입력을 통해 기입해주세요
			</S.Message>
		</S.Container>
	);
};

export default ChipButton;
