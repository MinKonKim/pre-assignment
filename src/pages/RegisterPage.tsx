import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components";
import { useRegister } from "../features/auth/hooks";
import { RegisterRequestType } from "../features/auth/types";
import { validateForm } from "../utils";

interface RegisterFormType extends RegisterRequestType {
  confirmPassword: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<RegisterFormType>();
  const regist = useRegister();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    const { isValid, errors: validationErrors } = validateForm(data);

    if (!isValid) {
      Object.entries(validationErrors).forEach(([field, message]) => {
        setError(field as keyof RegisterFormType, {
          type: "manual",
          message,
        });
      });
      return;
    }
    // 회원 가입.
    await regist.mutateAsync(data);
    navigate("/login");
  };

  return (
    <form
      className="flex-center flex-col gap-2 w-50rem border p-4 rounded-lg m-2"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input label="id" register={register} tag="아이디" isFull required />
      <Input
        type="password"
        label="password"
        register={register}
        tag="비밀번호"
        errors={errors}
        isFull
        required
      />
      <Input
        type="password"
        label="confirmPassword"
        register={register}
        tag="비밀번호 확인"
        errors={errors}
        isFull
        required
      />
      <Input
        type="text"
        label="nickname"
        register={register}
        tag="닉네임"
        isFull
        required
      />
      <Button type="submit" variant="primary" size="large" isFull>
        가입하기
      </Button>
    </form>
  );
};

export default RegisterPage;
