import { BlogPostType } from "../../../types/blog";
import Card from "./Card";

interface CardContainerProps {
  data: BlogPostType[]; // Card 데이터 배열
}

const CardContainer = ({ data }: CardContainerProps) => {
  if (!data || data.length === 0) {
    return <p className="text-gray-500">표시할 카드가 없습니다.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.map((item) => (
        <Card key={item.id} title={item.title} description={item.content} />
      ))}
    </div>
  );
};

export default CardContainer;
