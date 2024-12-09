import React from "react";

interface CardProps {
  title?: string; // 카드의 제목
  description?: string; // 카드의 설명
  imageUrl?: string; // 카드에 표시할 이미지 URL
  footer?: React.ReactNode; // 카드 하단에 들어갈 내용 (ReactNode로 유연성 제공)
  onClick?: () => void; // 카드 클릭 이벤트 핸들러
  className?: string; // 추가적인 스타일링을 위한 클래스 이름
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  footer,
  onClick,
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 cursor-pointer ${className}`}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title || "Card Image"}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        {title && (
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        )}
        {description && (
          <p className="mt-2 text-gray-600 text-sm">{description}</p>
        )}
      </div>
      {footer && <div className="p-4 bg-gray-100">{footer}</div>}
    </div>
  );
};

export default Card;
