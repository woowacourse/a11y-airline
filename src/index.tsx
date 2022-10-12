import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { URL } from '@/constant/URL';

import App from '@/App';

const InsertingPassenger = React.lazy(() => import('@/pages/InsertingPassenger'));
const CarouselTravelList = React.lazy(() => import('@/pages/CarouselTravelList/index'));

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
