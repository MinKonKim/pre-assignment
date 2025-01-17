import Loader from "./Loader";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary"; // 버튼 스타일 유형
  size?: "small" | "medium" | "large"; // 버튼 크기
  isFull?: boolean; // 버튼 너비
  outline?: boolean; // 버튼 테두리 스타일
  isLoading?: boolean; // 로딩 중인지 여부
}

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  isFull,
  outline,
  isLoading = false,
  ...props
}: ButtonProps) => {
  // 기본 스타일
  const bgColor = outline
    ? "bg-transparent"
    : variant === "primary"
    ? "bg-prime-500 text-white"
    : "bg-secondary-500 text-gray-800";

  // 테두리 색상
  const borderColor = outline
    ? variant === "primary"
      ? "border-2 border-prime-500 text-prime-500"
      : "border-2 border-secondary-500 text-secondary-500"
    : "";

  // 버튼 크기
  const btnSize =
    size === "small"
      ? "py-1 px-2 text-sm"
      : size === "large"
      ? "py-2 px-4 text-lg"
      : "py-2 px-3 text-base";

  // 너비 설정
  const fullWidthClass = isFull ? "w-full" : "";

  // 채도 조정 클래스
  const hoverEffect = "hover:saturate-60 hover:brightness-90";

  return (
    <button
      {...props}
      className={`${bgColor} ${borderColor} ${btnSize} ${fullWidthClass} ${hoverEffect} rounded-lg font-semibold`}
    >
      {isLoading ? <Loader color="white" /> : children}
    </button>
  );
};

export default Button;
