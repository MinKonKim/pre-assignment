import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { addBlogPost } from "../apis/blog";
import Button from "../components/common/Button/BaseButton";
import Form from "../components/common/Input/Form";
import Input from "../components/common/Input/Input";
import Textarea from "../components/common/Input/Textarea";
import Title from "../components/common/Text/Title";
import useAuth from "../hooks/useAuth";
import useInput from "../hooks/useInput";
import { useToast } from "../hooks/useToast";

const PostPage = () => {
  const title = useInput("");
  const content = useInput("");
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { addToast } = useToast();
  const handleAddPost = async (e: FormEvent) => {
    e.preventDefault();
    if (!isAuthenticated) return;
    const response = await addBlogPost(title.value, content.value);
    addToast(response.message, response.success ? "success" : "error");
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300">
      <Form onSubmit={handleAddPost}>
        <Title>글 작성</Title>
        <Input {...title} placeholder="제목을 입력해주세요." />
        <Textarea
          id="content"
          name="content"
          placeholder="내용을 입력해주세요."
          {...content}
          isFull
        />
        <Button type="submit">완료</Button>
      </Form>
    </div>
  );
};

export default PostPage;
