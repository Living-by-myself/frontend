import * as S from "./styles";
import Label from "../../common/label";
import InputText from "../../common/inputText";
import ErrorMessage from "../../common/errorMessage";
import Button from "../../common/button";
import TextArea from "@/components/common/textarea";
import useOverlay from "@/hooks/useOverlay";
import LocationSelectModal, {
  Location,
} from "@/components/kakaoMap/locationSelectModal";
import { useState } from "react";

const GroupBuyWriteForm = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const overlay = useOverlay();

  const openLocationModal = (): Promise<Location> => {
    return new Promise((resolve) => {
      overlay.open(({ close }) => (
        <LocationSelectModal
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
      <S.FormInner>
        <S.FormRow>
          <Label htmlFor="title">제목</Label>
          <InputText placeholder="공동구매 글 제목" id="title" />
          <ErrorMessage>20자 이내의 제목을 입력해주세요.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="itemLink">물품 링크(선택사항)</Label>
          <InputText placeholder="물품 링크(선택사항)" id="itemLink" />
          <ErrorMessage>올바른 url 형식이 아닙니다.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="itemLink">가격</Label>
          <InputText placeholder="가격(원)" id="itemLink" type="number" />
          <ErrorMessage>100만원 이하의 가격을 입력해주세요.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <Label htmlFor="userCount">인원</Label>
          <InputText placeholder="인원" id="userCount" type="number" />
          <ErrorMessage>100명 이하의 인원을 입력해주세요.</ErrorMessage>
        </S.FormRow>

        <S.FormRow>
          <Label htmlFor="description">설명</Label>
          <TextArea
            placeholder="진행할 공동구매에 대해서 설명해주세요."
            id="description"
            rows={5}
          />
          <ErrorMessage>올바른 설명을 입력해주세요.</ErrorMessage>
        </S.FormRow>
        <S.FormRow>
          <S.LocationContainer>
            <Label htmlFor="location">장소</Label>
            <Button variants="link" size="sm">
              삭제
            </Button>
          </S.LocationContainer>
          <Button variants="outline" onClick={handleOpenLocationModal}>
            {location ? location.address_name : "장소를 선택해주세요."}
          </Button>
        </S.FormRow>
        <S.FormRow>
          <Button onClick={() => {}}>글 등록하기</Button>
        </S.FormRow>
      </S.FormInner>
    </S.Container>
  );
};

export default GroupBuyWriteForm;
