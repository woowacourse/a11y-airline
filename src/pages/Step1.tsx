import PassengerCounter from "@components/PassengerCounter";
const Step1 = () => {
  return (
    <div>
      <h1>탑승 인원을 정해주세요.</h1>
      <PassengerCounter ageGroup="성인" />
    </div>
  );
};

export default Step1;
