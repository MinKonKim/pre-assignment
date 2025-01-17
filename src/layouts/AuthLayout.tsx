import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Outlet } from "react-router-dom";
import { CarouselItem } from "./components";

const AuthLayout = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-screen overflow-hidden">
      <div className="hidden md:flex flex-col justify-center items-center w-full md:w-1/2 p-8 bg-gray-400">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          showStatus={false}
          showArrows={false}
        >
          <CarouselItem
            title="환영합니다!"
            description="저는 프론트엔드 개발자 김민곤입니다."
          />
          <CarouselItem
            title="경험의 가치를 알고있는 김민곤 입니다."
            description="UI/UX , 최적화를 통해 유저 친화적 개발자가 목표입니다."
          />
          <CarouselItem
            title="회사의 린치핀이 되고자 합니다!"
            description="함께 성장하며 혁신을 이끌어 나가겠습니다."
          />
        </Carousel>
      </div>
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8 shadow-md rounded-md">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
