import React from "react";
import useInput from "../hooks/useInput";
import Input from "../components/common/Input";
import { useLogin } from "../hooks/useAuth";
import FormLayout from "../layouts/FormLayout";
import Form from "../components/common/Form";

const LoginPage = () => {
  const { mutate: login, isPending } = useLogin();

  const id = useInput("");
  const password = useInput("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(
      { data: { id: "testuser", password: "password123" }, expiresIn: 10 },
      {
        onSuccess: (data) => {
          alert("로그인 성공!");
          console.log("Response:", data);
          // 토큰 저장 등 추가 작업
        },
        onError: (error) => {
          alert("로그인 실패");
          console.error("Error:", error);
        },
      }
    );
  };
  return (
    <FormLayout>
      <Form onSubmit={handleLogin}>
        <Input {...id} />
        <Input {...password} type="password" />
        <button>{isPending ? "로그인중..." : "로그인"}</button>
      </Form>
    </FormLayout>
  );
};

export default LoginPage;
