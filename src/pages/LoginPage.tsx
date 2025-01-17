import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../components";
import { useLogin } from "../features/auth/hooks";
import { LoginRequestType } from "../features/auth/types";

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginRequestType>();
  const navigate = useNavigate();
  const login = useLogin();
  const onSubmit: SubmitHandler<LoginRequestType> = async (data) => {
    await login.mutateAsync(data);
    navigate("/");
  };
  return (
    <div className="flex-center flex-col min-h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex-center flex-col gap-2 w-50rem border p-4 rounded-lg"
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
        <Button type="submit" size="large" isFull>
          로그인하기
        </Button>

        <Button
          onClick={() => navigate("/register")}
          size="large"
          isFull
          outline
        >
          회원가입하기
        </Button>
      </form>
    </div>
  );
};

export default LoginPage;
