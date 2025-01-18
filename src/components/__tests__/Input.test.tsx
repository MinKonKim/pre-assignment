import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
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

test("Input 컴포넌트가 에러 메시지를 표시합니다.", () => {
  const errors = {
    testField: {
      type: "required",
      message: "This field is required",
    },
  };
  render(<TestComponent errors={errors} />);
  const errorMessage = screen.getByText(/This field is required/i);
  expect(errorMessage).toBeInTheDocument();
});
