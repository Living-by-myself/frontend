import * as S from "./styles";
import Label from "../../common/label";
import InputText from "../../common/inputText";
import ErrorMessage from "../../common/errorMessage";
import Button from "../../common/button";

import Typography from "@/components/common/typography";
import { useState } from "react";
import useOverlay from "@/hooks/useOverlay";
import UserLocationModal from "@/components/kakaoMap/userLocationModal";
import { Location } from "@/components/kakaoMap/locationSelectModal";

const UserProfileForm = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const overlay = useOverlay();

  const openLocationModal = (): Promise<Location> => {
    return new Promise((resolve) => {
      overlay.open(({ close }) => (
        <UserLocationModal
          onConfirm={(loc) => {
            resolve(loc);
            close();
          }}
          onClose={() => {
            resolve(null);
            close();
          }}
        />
      ));
    });
  };

  const handleOpenLocationModal = async () => {
    const location = await openLocationModal();
    if (!location) return;
    setLocation(location);
    console.log(location);
  };
  return (
    <S.Container>
      <S.Form>
        <S.FormRow>
          <Label htmlFor="email">이메일</Label>
          <Typography variants="caption1">
            이메일은 변경할 수 없습니다.
          </Typography>
          <InputText placeholder="이메일" id="email" type="email" disabled />
          <ErrorMessage>이메일 형식이 올바르지 않습니다.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="username">닉네임</Label>
          <Typography variants="caption1">
            12자 이내의 한글 또는 영문, 숫자
          </Typography>
          <InputText placeholder="닉네임" id="username" />
          <ErrorMessage>
            영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.
          </ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="address">주소</Label>
          <Button onClick={handleOpenLocationModal} variants="outline">
            나의 위치 찾기
          </Button>
          <InputText
            placeholder="상세 주소"
            id="address_detail"
            disabled
            onChange={() => {}}
            value={location?.address_name || ""}
          />
          <ErrorMessage>인증번호가 일치하지 않습니다.</ErrorMessage>
        </S.FormRow>
      </S.Form>

      <Button onClick={() => {}}>회원가입</Button>
    </S.Container>
  );
};

export default UserProfileForm;
