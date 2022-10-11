import Description from './Description';
import SpinButton from './SpinButton';

import styles from './index.module.scss';

const passengers = [
  {
    type: '성인',
    description: '국제선 만 12세 이상, 국내선 만 13세 이상',
  },
  {
    type: '소아',
    description: '국제선 만 12세 미만, 국내선 만 13세 미만',
  },
  {
    type: '유아',
    description: '만 2세 미만',
  },
];

function Step1() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>승객 선택</h1>
      {passengers.map(passenger => (
        <section>
          <Description helpText={passenger.description}>
            {passenger.type}
          </Description>
          <SpinButton target={passenger.type} />
        </section>
      ))}
    </main>
  );
}

export default Step1;
