import PassengerCounter from "@components/PassengerCounter";
const Step1 = () => {
  return (
    <article className="flex flex-col gap-10 mt-2.5 justify-center items-center">
      <h1 className="text-xl font-extrabold">연령별 탑승 인원 선택</h1>
      <PassengerCounter ageGroup="성인" />
      <PassengerCounter ageGroup="청소년" />
      <PassengerCounter ageGroup="영유아" />
    </article>
  );
};

export default Step1;
