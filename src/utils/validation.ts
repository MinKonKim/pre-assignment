export const validatePassword = (password: string): boolean => {
  // 비밀번호 유효성 검사 로직 (예: 최소 8자, 대문자, 소문자, 숫자, 특수문자 포함)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};
export const comparePasswords = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};
