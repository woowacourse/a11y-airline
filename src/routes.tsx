import Carousel from "./pages/Carousel";
import Home from "./pages/Home";
import Passenger from "./pages/Passenger";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/passenger",
    element: <Passenger />,
  },
  {
    path: "/carousel",
    element: <Carousel />,
  },
];

export default routes;
