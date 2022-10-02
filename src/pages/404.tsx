import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const handlePushToPreviousPage = () => {
    navigate("/");
  };

  return (
    <article className="flex flex-col gap-10 mt-2.5 justify-center items-center">
      <h1 className="text-xl font-extrabold">
        죄송합니다. 존재하지 않는 페이지 입니다.
      </h1>
      <button type="button" onClick={handlePushToPreviousPage}>
        메인 화면으로 가기
      </button>
    </article>
  );
};

export default NotFound;
