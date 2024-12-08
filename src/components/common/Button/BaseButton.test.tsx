import { fireEvent, render, screen } from "@testing-library/react";
import BaseButton from "./BaseButton";

describe("BaseButton 컴포넌트", () => {
  it("버튼이 올바른 children을 렌더링해야 합니다", () => {
    render(<BaseButton>클릭하세요</BaseButton>);
    expect(screen.getByText("클릭하세요")).toBeInTheDocument();
  });

  it("기본 클래스와 추가 클래스를 적용해야 합니다", () => {
    render(<BaseButton className="custom-class">스타일 버튼</BaseButton>);
    const button = screen.getByText("스타일 버튼");
    expect(button).toHaveClass(
      "w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    );
    expect(button).toHaveClass("custom-class");
  });

  it("onClick 핸들러가 클릭 시 호출되어야 합니다", () => {
    const handleClick = jest.fn();
    render(<BaseButton onClick={handleClick}>클릭하세요</BaseButton>);
    const button = screen.getByText("클릭하세요");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("기본 type 속성이 button이어야 합니다", () => {
    render(<BaseButton>기본 타입</BaseButton>);
    const button = screen.getByText("기본 타입");
    expect(button).toHaveAttribute("type", "button");
  });

  it("사용자가 지정한 type 속성을 렌더링해야 합니다", () => {
    render(<BaseButton type="submit">제출 버튼</BaseButton>);
    const button = screen.getByText("제출 버튼");
    expect(button).toHaveAttribute("type", "submit");
  });
});
