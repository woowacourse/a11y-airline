import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from '@/App';
import InsertingPassenger from '@/pages/InsertingPassenger';
import CarouselTravelList from '@/pages/CarouselTravelList/CarouselTravelList';

import { URL } from '@/constant/URL';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
	<BrowserRouter>
		<Routes>
			<Route path={URL.HOME} element={<App />} />
			<Route path={URL.INSERTING_PASSENGER} element={<InsertingPassenger />} />
			<Route path={URL.CAROUSEL_TRAVEL} element={<CarouselTravelList />} />
		</Routes>
	</BrowserRouter>,
);
