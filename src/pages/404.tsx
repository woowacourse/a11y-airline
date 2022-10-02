import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handlePushToPreviousPage = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>죄송합니다. 존재하지 않는 페이지 입니다.</h1>
      <button type="button" onClick={handlePushToPreviousPage}>
        뒤로가기
      </button>
    </div>
  );
};

export default NotFound;
