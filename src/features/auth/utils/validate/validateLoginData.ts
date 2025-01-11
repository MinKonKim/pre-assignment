import { z } from "zod";
import { LoginRequestType } from "../../types/api";

const loginSchema = z.object({
  id: z.string().nonempty("아이디는 필수 항목입니다."),
  password: z.string().nonempty("비밀번호는 필수 항목입니다."),
});

const validateLoginData = (data: LoginRequestType) => {
  const result = loginSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((err) => err.message).join(", ");
    return {
      success: false,
      message: errors,
    };
  }
  return {
    success: true,
    message: "로그인 성공!",
  };
};

export default validateLoginData;
