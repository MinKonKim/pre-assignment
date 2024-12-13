import { Link } from "react-router-dom";
import Button from "../components/common/Button/BaseButton";
import CardContainer from "../components/common/Card/CardContainer";
import { useGetBlogPosts } from "../hooks/useBlogPost";

const MainPage = () => {
  const { data, isError } = useGetBlogPosts();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        환영합니다!
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 mb-6 text-center max-w-xl">
        저희 웹사이트에 오신 것을 환영합니다. 아래는 모두
      </p>
      <div className="flex items-center">
        <img
          src="https://www.venturesquare.net/wp-content/uploads/2020/06/notion.png"
          className="w-10 h-10 mr-2"
        />
        <p className="text-lg md:text-2xl text-gray-200 text-center max-w-xl">
          Notion 페이지와 연결되어 있습니다.
        </p>
      </div>
      <div className="m-3 w-[80vw]">
        {!isError && <CardContainer data={data?.data || []} />}
      </div>
      <Link to="/post">
        <Button className="w-20">등록하기</Button>
      </Link>
    </div>
  );
};

export default MainPage;
