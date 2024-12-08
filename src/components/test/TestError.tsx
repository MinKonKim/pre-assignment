const TestError = () => {
  const throwError = () => {
    throw new Error("테스트 에러 발생!");
  };

  return <button onClick={throwError}>에러 발생</button>;
};

export default TestError;
