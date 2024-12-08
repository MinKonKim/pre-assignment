export const validatePassword = (password: string) => {
  // 조건 정의
  const rules = [
    {
      test: (pw: string) => pw.length >= 8,
      error: "비밀번호는 최소 8자 이상이어야 합니다.",
    },
    {
      test: (pw: string) => /[a-z]/.test(pw),
      error: "비밀번호에는 소문자가 포함되어야 합니다.",
    },
    {
      test: (pw: string) => /\d/.test(pw),
      error: "비밀번호에는 숫자가 포함되어야 합니다.",
    },
    {
      test: (pw: string) => /[!@#$%^&*(),.?":{}|<>]/.test(pw),
      error: "비밀번호에는 특수 문자가 포함되어야 합니다.",
    },
  ];

  // 조건 검사
  const errors = rules
    .filter((rule) => !rule.test(password)) // 조건이 실패한 경우
    .map((rule) => rule.error); // 실패한 조건의 에러 메시지 추출

  return {
    isValid: errors.length === 0,
    errors,
  };
};
