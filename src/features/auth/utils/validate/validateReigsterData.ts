import { z } from "zod";
import { RegisterRequestType } from "../../types/api";

const registerSchema = z.object({
  id: z.string().nonempty("아이디는 필수 항목입니다."),
  password: z.string().min(6, "비밀번호는 최소 6자 이상이어야 합니다."),
  nickname: z.string().nonempty("닉네임은 필수 항목입니다."),
});

const validateRegisterData = (data: RegisterRequestType) => {
  const result = registerSchema.safeParse(data);
  if (!result.success) {
    const errors = result.error.errors.map((err) => err.message).join(", ");
    return {
      message: errors,
      success: false,
    };
  }

  return {
    message: "회원가입 성공!",
    success: true,
  };
};

export default validateRegisterData;
