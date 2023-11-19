import useUserStore from "@/store/useUserStore";
import * as S from "./styles";
import Avatar from "@/components/common/avatar";
import Typography from "@/components/common/typography";

const ProfilePreview = () => {
  const { profile } = useUserStore();
  return (
    <S.Container>
      <Avatar src={profile?.profileImage} />
      <S.Info>
        <S.InfoRow>
          <Typography variants="body1">{profile?.nickname}</Typography>
        </S.InfoRow>
        <S.InfoRow>
          <Typography variants="caption1">{profile?.address}</Typography>
          <Typography variants="body3">LV.{profile?.level}</Typography>
        </S.InfoRow>
      </S.Info>
    </S.Container>
  );
};

export default ProfilePreview;
