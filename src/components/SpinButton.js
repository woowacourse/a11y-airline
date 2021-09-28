const SpinButton = () => {
  return (
    <>
      <h1>승객 선택</h1>
      <h2 className='subTitle'>성인</h2>
      <button type='button' aria-label='성인 탑승자 한명 줄이기'>
        -
      </button>
      <input value={1} type='number' />
      <button type='button' aria-label='성인 탑승자 한명 늘리기'>
        +
      </button>
    </>
  );
};

export default SpinButton;
