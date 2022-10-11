import SpinButton from "component/SpinButton";
import { LABEL } from "constant";

const SelectPassengerPage = () => {
  return (
    <div>
      <h1>승객 선택</h1>

      <SpinButton label={LABEL.ADULT} />
    </div>
  );
};

export default SelectPassengerPage;
