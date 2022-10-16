import React from "react";
import Carousel from "./components/Carousel";
import TravelItem from "./components/TravelItem";
import { TRAVEL_INFO_LIST } from "./constants/travel";
import "./style/App.css";

function App() {
  return (
    <div className="App">
      <h2>지금 떠나기 좋은 여행</h2>
      <Carousel>
        {TRAVEL_INFO_LIST.map((item) => (
          <TravelItem key={item.location} {...item} />
        ))}
      </Carousel>
    </div>
  );
}

export default App;
