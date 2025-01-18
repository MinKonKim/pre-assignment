interface ValidationErrors {
  id?: string;
  nickname?: string;
  password?: string;
  confirmPassword?: string;
}

const validatePassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

const comparePasswords = (
  password: string,
  confirmPassword: string
): boolean => {
  return password === confirmPassword;
};

const validateId = (id: string): boolean => {
  const idRegex = /^[a-zA-Z0-9]+$/;
  return idRegex.test(id);
};

const validateNickname = (nickname: string): boolean => {
  const nicknameRegex = /^[a-zA-Z0-9]+$/;
  return nicknameRegex.test(nickname);
};

const validateForm = (data: {
  id: string;
  nickname: string;
  password: string;
  confirmPassword: string;
}): { isValid: boolean; errors: ValidationErrors } => {
  const errors: ValidationErrors = {};

  if (!validateId(data.id)) {
    errors.id =
      "아이디는 한글이 포함될 수 없으며, 빈칸, 공백, 특수기호가 들어갈 수 없습니다.";
  }

  if (!validateNickname(data.nickname)) {
    errors.nickname = "닉네임은 빈칸, 공백, 특수기호가 들어갈 수 없습니다.";
  }

  if (!validatePassword(data.password)) {
    errors.password =
      "비밀번호는 최소 8자, 대문자, 소문자, 숫자, 특수문자를 포함해야 합니다.";
  }

  if (!comparePasswords(data.password, data.confirmPassword)) {
    errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
  }

  const isValid = Object.keys(errors).length === 0;
  return { isValid, errors };
};

export default validateForm;
