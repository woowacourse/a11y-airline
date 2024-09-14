import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>A11y AIRLINE</h1>
        <span>
          A11y AIRLINE은 고객 여러분꼐 안전하고 쾌적한 여행을 위해 최선을 다하고
          있습니다.
        </span>
      </header>
      <main className='App'>
        <section>
          <h2>항공권 예매</h2>
          <div>
            <div>
              <span>성인</span>
              <div>?</div>
            </div>
            <div>
              <button>-</button>
              <div>1</div>
              <button>+</button>
            </div>

            <button>항공편 검색</button>
          </div>
        </section>
        <section>
          <h2>지금 떠나기 좋은 여행</h2>
          <div>
            <button> {'<'} </button>
            <div>
              <span>서울/인천 - 두바이</span>
              <span>일반석 왕복</span>
              <span>KRW 1,121,600</span>
            </div>
            <button> {'>'} </button>
          </div>
        </section>
      </main>
      <footer>{'(c) A11Y AIRLINE'}</footer>
    </>
  );
}

export default App;
