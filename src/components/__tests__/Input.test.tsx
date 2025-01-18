import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { FieldErrors, useForm } from "react-hook-form";
import Input from "../Input";

interface TestForm {
  testField: string;
}

const TestComponent = ({ errors }: { errors?: FieldErrors<TestForm> }) => {
  const { register } = useForm<TestForm>();
  return (
    <Input
      label="testField"
      register={register}
      required
      tag="Test Field"
      errors={errors}
    />
  );
};

test("Input 컴포넌트가 렌더링됩니다.", () => {
  render(<TestComponent />);
  const inputElement = screen.getByLabelText(/Test Field/i);
  expect(inputElement).toBeInTheDocument();
});

test("Input 컴포넌트가 클릭되지 않았을 때 에러 클래스를 적용하지 않습니다.", () => {
  const errors = {
    testField: {
      type: "required",
      message: "This field is required",
    },
  };
  render(<TestComponent errors={errors} />);
  const inputElement = screen.getByLabelText(/Test Field/i);
  expect(inputElement).toHaveClass("border-green-500");
  expect(inputElement).not.toHaveClass("border-red-500");
});

test("Input 컴포넌트가 클릭되었을 때 에러 클래스를 적용합니다.", () => {
  const errors = {
    testField: {
      type: "required",
      message: "This field is required",
    },
  };
  render(<TestComponent errors={errors} />);
  const inputElement = screen.getByLabelText(/Test Field/i);
  fireEvent.click(inputElement);
  expect(inputElement).toHaveClass("border-red-500");
  expect(inputElement).not.toHaveClass("border-green-500");
});

test("Input 컴포넌트가 클릭되었을 때 에러 메시지를 표시합니다.", () => {
  const errors = {
    testField: {
      type: "required",
      message: "This field is required",
    },
  };
  render(<TestComponent errors={errors} />);
  const inputElement = screen.getByLabelText(/Test Field/i);
  fireEvent.click(inputElement);
  const errorMessage = screen.getByText(/This field is required/i);
  expect(errorMessage).toBeInTheDocument();
});
