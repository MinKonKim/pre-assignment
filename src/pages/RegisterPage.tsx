import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "../components";
import { AuthService } from "../features/auth/services";
import { RegisterRequestType } from "../features/auth/types";

const RegisterPage: React.FC = () => {
  const { register, handleSubmit } = useForm<RegisterRequestType>();
  const onSubmit: SubmitHandler<RegisterRequestType> = async (data) => {
    await AuthService.register(data);
  };

  return (
    <form
      className="flex flex-col items-center justify-center h-screen"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input label="id" register={register} required />
      <Input label="password" register={register} required />
      <Input label="nickname" register={register} required />
      <button type="submit">제출하기</button>
    </form>
  );
};

export default RegisterPage;
