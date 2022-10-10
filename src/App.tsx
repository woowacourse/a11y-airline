import { URL } from '@/constant/URL';

const App = () => {
	return (
		<main>
			<section>
				<a href={URL.INSERTING_PASSENGER}>승객수 입력하기 페이지로 이동하기</a>
				<a href={URL.CAROUSEL_TRAVEL}>carousel 페이지로 이동하기</a>
			</section>
		</main>
	);
};

export default App;
