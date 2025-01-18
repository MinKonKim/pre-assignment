import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "../Button";

test("Button 컴포넌트가 로딩 중일 때 Loader를 렌더링합니다.", () => {
  render(<Button isLoading>Click me</Button>);
  const loaderElement = screen.getByRole("status", { name: /loading/i });
  expect(loaderElement).toBeInTheDocument();
});

test("Button 컴포넌트가 로딩 중이 아닐 때 children을 렌더링합니다.", () => {
  render(<Button>Click me</Button>);
  const buttonText = screen.getByText(/Click me/i);
  expect(buttonText).toBeInTheDocument();
});

test("Button 컴포넌트가 primary 스타일로 렌더링됩니다.", () => {
  render(<Button variant="primary">Primary Button</Button>);
  const buttonElement = screen.getByText(/Primary Button/i);
  expect(buttonElement).toHaveClass("bg-prime-500 text-white");
});

test("Button 컴포넌트가 secondary 스타일로 렌더링됩니다.", () => {
  render(<Button variant="secondary">Secondary Button</Button>);
  const buttonElement = screen.getByText(/Secondary Button/i);
  expect(buttonElement).toHaveClass("bg-secondary-500 text-gray-800");
});

test("Button 컴포넌트가 full width로 렌더링됩니다.", () => {
  render(<Button isFull>Full Width Button</Button>);
  const buttonElement = screen.getByText(/Full Width Button/i);
  expect(buttonElement).toHaveClass("w-full");
});
