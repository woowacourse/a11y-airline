import "./app.css";
import Carousel from "./components/carousel/Carousel";
import SpinButton from "./components/spin-button/SpinButton";

function App() {
  return (
    <main className="app">
      <h1>누구나 접근할 수 있는 항공사 웹사이트</h1>
      <SpinButton />
      <Carousel />
    </main>
  );
}

export default App;
