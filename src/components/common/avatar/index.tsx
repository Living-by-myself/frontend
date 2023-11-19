import * as S from "./styles";
import blank_profile from "/blank_profile.png";

interface AvatarProps {
  src: string | null | undefined;
  size?: number;
}

const Avatar = ({ src, size = 36 }: AvatarProps) => {
  return (
    <S.AvatarImage src={src || blank_profile} width={size} height={size} />
  );
};

export default Avatar;
