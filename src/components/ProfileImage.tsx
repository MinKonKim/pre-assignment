import pofileImage from "../assets/profileIcon.png";
import { useNavigate } from "react-router-dom";
import { UserInfoType } from "../features/user/types";

interface ProfileImageProps {
  user: UserInfoType;
  size: "small" | "medium" | "large";
}

const sizeClasses = {
  small: "w-16 h-16",
  medium: "w-32 h-32",
  large: "w-48 h-48",
};

const ProfileImage = ({ user, size }: ProfileImageProps) => {
  const { avatar, nickname, id } = user;

  const imgSrc = avatar ? URL.createObjectURL(avatar) : pofileImage;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/profile/${id}`);
  };

  return (
    <img
      src={imgSrc}
      alt={`${nickname} 프로필 사진`}
      className={`${sizeClasses[size]} rounded-full object-cover cursor-pointer`}
      onClick={handleClick}
    />
  );
};

export default ProfileImage;
