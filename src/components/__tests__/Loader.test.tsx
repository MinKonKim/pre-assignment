import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Loader from "../Loader";
test("Loader 컴포넌트가 기본 크기와 색상으로 렌더링됩니다.", () => {
  render(<Loader />);
  const loaderElement = screen.getByRole("status", { name: /loading/i });
  expect(loaderElement).toBeInTheDocument();
  expect(loaderElement).toHaveClass(
    "w-6 h-6 border-2 border-blue-500 border-t-transparent"
  );
});

test("Loader 컴포넌트가 주어진 크기와 색상으로 렌더링됩니다.", () => {
  render(<Loader size="lg" color="success" />);
  const loaderElement = screen.getByRole("status", { name: /loading/i });
  expect(loaderElement).toBeInTheDocument();
  expect(loaderElement).toHaveClass(
    "w-8 h-8 border-3 border-green-500 border-t-transparent"
  );
});

test("Loader 컴포넌트가 full width로 렌더링됩니다.", () => {
  render(<Loader fullWidth />);
  const containerElement = screen.getByRole("status", {
    name: /loading/i,
  }).parentElement;
  expect(containerElement).toHaveClass("w-full");
});
