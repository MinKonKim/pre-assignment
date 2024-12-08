import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button/BaseButton";
import Form from "../components/common/Input/Form";
import Input from "../components/common/Input/Input";
import Title from "../components/common/Text/Title";
import useInput from "../hooks/useInput";
import { useToast } from "../hooks/useToast";
import { useSignup } from "../hooks/useUser";
import FormLayout from "../layouts/FormLayout";

const SignupPage = () => {
  const navigate = useNavigate();
  const { mutate: signup } = useSignup();
  const { addToast } = useToast(); // Toast 훅 가져오기

  const id = useInput("");
  const password = useInput("");
  const passwordCheck = useInput("");
  const nickname = useInput("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password.value !== passwordCheck.value) {
      addToast("패스워드가 일치하지 않습니다.", "error"); // 실패 Toast
      return;
    }

    const userData = {
      id: id.value as string,
      password: password.value as string,
      nickname: nickname.value as string,
    };

    signup(
      { ...userData },
      {
        onSuccess: (data) => {
          addToast("회원가입 성공!", "success"); // 성공 Toast
          navigate("/login");
          console.log("Response : ", data);
        },
        onError: (error) => {
          addToast("회원가입 실패", "error"); // 실패 Toast
          console.error("Error:", error);
        },
      }
    );
  };

  return (
    <FormLayout>
      <Form
        className="flex flex-col gap-4 w-full max-w-md p-8 bg-white shadow-md rounded"
        onSubmit={handleSignup}
      >
        <Title>회원가입</Title>
        <Input {...id} placeholder="아이디를 입력해주세요." />
        <Input
          {...password}
          type="password"
          placeholder="비밀번호를 입력해 주세요."
        />
        <Input
          {...passwordCheck}
          type="password"
          placeholder="위와 동일한 비밀번호를 입력해 주세요."
        />
        <Input {...nickname} placeholder="닉네임을 입력해 주세요." />
        <Button type="submit">{"회원가입"}</Button>
      </Form>
    </FormLayout>
  );
};

export default SignupPage;
