import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/Button/BaseButton";
import Form from "../components/common/Input/Form";
import Input from "../components/common/Input/Input";
import Title from "../components/common/Text/Title";
import useInput from "../hooks/useInput";
import { useLogin } from "../hooks/useUser";
import FormLayout from "../layouts/FormLayout";
import { useUserStore } from "../stores/userStore";

const LoginPage = () => {
  const { mutate: login, isPending } = useLogin();
  const navigate = useNavigate();
  const id = useInput("");
  const password = useInput("");

  const { setUser } = useUserStore();
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(
      { data: { id: id.value, password: password.value }, expiresIn: 10 },
      {
        onSuccess: (data) => {
          setUser(data);
          navigate("/");
          console.log("Response:", data);
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
        <Title>로그인</Title>
        <Input {...id} placeholder="아이디" />
        <Input {...password} type="password" placeholder="비밀번호" />
        <Button type="submit">{isPending ? "로그인중..." : "로그인"}</Button>
      </Form>
    </FormLayout>
  );
};

export default LoginPage;
