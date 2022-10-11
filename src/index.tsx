import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App />);

// 로그 함수를 인수로 전달하면, App 성능을 측정합니다.
// EX) reportWebVitals(console.log); // 콘솔을 통해 측정 결과를 출력합니다.
reportWebVitals();
