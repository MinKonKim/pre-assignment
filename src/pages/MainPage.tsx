import Button from "../components/common/Button/BaseButton";
import { useToast } from "../hooks/useToast";

const MainPage = () => {
  const { addToast } = useToast();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        환영합니다!
      </h1>

      <p className="text-lg md:text-2xl text-gray-200 mb-6 text-center max-w-xl">
        저희 웹사이트에 오신 것을 환영합니다. 다양한 기능과 서비스를 즐겨보세요!
      </p>

      <Button className="w-20" onClick={() => addToast("안녕하세요", "info")}>
        시작하기
      </Button>
    </div>
  );
};

export default MainPage;
