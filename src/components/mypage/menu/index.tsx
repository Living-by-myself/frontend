import styled from "styled-components";
import MyPageMenuCard from "./menuCard";

const MyPageMenuList = () => {
  return (
    <S.Container>
      <MyPageMenuCard children="활동 배지" />
      <MyPageMenuCard children="나의 공동구매" />
      <MyPageMenuCard children="내가 쓴 글" />
      <MyPageMenuCard children="회원정보 수정" />
      <MyPageMenuCard children="비밀번호 수정" />
      <MyPageMenuCard children="로그아웃" />
    </S.Container>
  );
};

export default MyPageMenuList;

const S = {
  Container: styled.div`
    width: 100vw;
  `,
};
