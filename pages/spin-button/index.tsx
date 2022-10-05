import type { NextPage } from 'next';
import PassengerItem from '../../components/PassengerItem';

const SpinButton: NextPage = () => {
  return (
    <section>
      <h2>승객 선택</h2>
      <div>
        <PassengerItem passengerType="성인" minNumber={1} maxNumber={3} />
        <PassengerItem passengerType="소아" minNumber={0} maxNumber={3} />
        <PassengerItem passengerType="유아" minNumber={0} maxNumber={3} />
      </div>
    </section>
  );
};

export default SpinButton;
