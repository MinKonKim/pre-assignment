import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components";
import { useRegister } from "../features/auth/hooks";
import { RegisterRequestType } from "../features/auth/types";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm<RegisterRequestType>();
  const reg = useRegister();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<RegisterRequestType> = async (data) => {
    // TODO : 회원가입 정보 확인 하는 비즈니스 로직 넣기.
    await reg.mutateAsync(data);
    navigate("/login");
  };

  return (
    <div className="flex-center min-h-screen">
      <form
        className="flex-center flex-col gap-2 w-50rem border p-4 rounded-lg"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input label="id" register={register} tag="아이디" isFull required />
        <Input
          type="password"
          label="password"
          register={register}
          tag="비밀번호"
          isFull
          required
        />
        <Input
          label="password"
          type="password"
          register={register}
          tag="비밀번호 확인"
          isFull
          required
        />
        <Input
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
    </div>
  );
};

export default RegisterPage;
