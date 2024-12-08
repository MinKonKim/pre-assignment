import { act, render, screen } from "@testing-library/react";
import { Toast as ToastType } from "../../types/toast";
import Toast from "./Toast";

jest.useFakeTimers();

describe("Toast Component", () => {
  const mockOnClose = jest.fn();

  afterEach(() => {
    jest.clearAllTimers();
    jest.clearAllMocks();
  });

  it("renders the toast message correctly", () => {
    const mockToast: ToastType = {
      id: "1",
      message: "Success message!",
      type: "success",
    };
    render(<Toast toast={mockToast} onClose={mockOnClose} />);
    expect(screen.getByText("Success message!")).toBeInTheDocument();
  });

  it("applies the correct background color for success type", () => {
    const mockToast: ToastType = {
      id: "2",
      message: "Success message!",
      type: "success",
    };
    render(<Toast toast={mockToast} onClose={mockOnClose} />);
    const toastElement = screen.getByText("Success message!");
    expect(toastElement).toHaveClass("bg-green-500");
  });

  it("applies the correct background color for error type", () => {
    const mockToast: ToastType = {
      id: "3",
      message: "Error message!",
      type: "error",
    };
    render(<Toast toast={mockToast} onClose={mockOnClose} />);
    const toastElement = screen.getByText("Error message!");
    expect(toastElement).toHaveClass("bg-red-500");
  });

  it("calls onClose after animation completes", () => {
    const mockToast: ToastType = {
      id: "4",
      message: "Info message!",
      type: "info",
    };
    render(<Toast toast={mockToast} onClose={mockOnClose} />);

    // 3초 후 퇴장 애니메이션 시작
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // 3.5초 후 onClose 호출
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("renders with fadeIn animation initially", () => {
    const mockToast: ToastType = {
      id: "5",
      message: "Fading In",
      type: "info",
    };
    render(<Toast toast={mockToast} onClose={mockOnClose} />);
    const toastElement = screen.getByText("Fading In");
    expect(toastElement).toHaveClass("animate-fadeIn");
  });

  it("applies fadeOut animation when disappearing", () => {
    const mockToast: ToastType = {
      id: "6",
      message: "Fading Out",
      type: "info",
    };
    const { rerender } = render(
      <Toast toast={mockToast} onClose={mockOnClose} />
    );

    // 3초 후 fadeOut animation 시작
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    rerender(<Toast toast={mockToast} onClose={mockOnClose} />);
    const toastElement = screen.getByText("Fading Out");
    expect(toastElement).toHaveClass("animate-fadeOut");
  });
});
