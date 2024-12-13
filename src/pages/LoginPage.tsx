import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../apis/user";
import Button from "../components/common/Button/BaseButton";
import Form from "../components/common/Input/Form";
import Input from "../components/common/Input/Input";
import Title from "../components/common/Text/Title";
import useInput from "../hooks/useInput";
import { useToast } from "../hooks/useToast";
import FormLayout from "../layouts/FormLayout";
import { useUserStore } from "../stores/userStore";

const LoginPage = () => {
  const navigate = useNavigate();
  const id = useInput("");
  const password = useInput("");
  const { addToast } = useToast();
  const { setUser } = useUserStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await loginUser(
      { id: id.value, password: password.value },
      30
    );
    if (response.success) {
      setUser(response);
      addToast("로그인 성공!", "success");
      navigate("/");
      navigate(0);
    } else {
      addToast(response.message, "error");
    }

    setIsLoading(false);
  };

  return (
    <FormLayout>
      <Form onSubmit={handleLogin}>
        <Title>로그인</Title>
        <Input {...id} placeholder="아이디" />
        <Input {...password} type="password" placeholder="비밀번호" />
        <Button type="submit">{isLoading ? "로그인중..." : "로그인"}</Button>
      </Form>
    </FormLayout>
  );
};

export default LoginPage;
