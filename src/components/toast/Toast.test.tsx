import { render, screen } from "@testing-library/react";
import { Toast as ToastType } from "../../types/toast";
import Toast from "./Toast";

describe("Toast Component", () => {
  it("올바른 메시지를 렌더링해야 합니다", () => {
    const mockToast: ToastType = {
      id: "1",
      message: "Success message!",
      type: "success",
    };
    render(<Toast toast={mockToast} />);
    expect(screen.getByText("Success message!")).toBeInTheDocument();
  });

  it("성공 메시지일 경우 올바른 배경색을 적용해야 합니다", () => {
    const mockToast: ToastType = {
      id: "2",
      message: "Success message!",
      type: "success",
    };
    render(<Toast toast={mockToast} />);
    const toastElement = screen.getByText("Success message!");
    expect(toastElement).toHaveClass("bg-green-500");
  });

  it("에러 메시지일 경우 올바른 배경색을 적용해야 합니다", () => {
    const mockToast: ToastType = {
      id: "3",
      message: "Error message!",
      type: "error",
    };
    render(<Toast toast={mockToast} />);
    const toastElement = screen.getByText("Error message!");
    expect(toastElement).toHaveClass("bg-red-500");
  });

  it("기본 메시지일 경우 올바른 배경색을 적용해야 합니다", () => {
    const mockToast: ToastType = {
      id: "4",
      message: "Info message!",
      type: "info",
    };
    render(<Toast toast={mockToast} />);
    const toastElement = screen.getByText("Info message!");
    expect(toastElement).toHaveClass("bg-blue-500");
  });
});
