import NavModal from "@/components/modal/navModal";
import useOverlay from "../../../hooks/useOverlay";
import * as S from "./styles";

const Header = () => {
  const overlay = useOverlay();

  const openNavModal = () => {
    overlay.open(({ close }) => <NavModal onClose={close} />);
  };

  return (
    <S.Container>
      <S.Nav>
        <S.NavItem href="#">메뉴명</S.NavItem>
        <S.NavItem href="#">메뉴명</S.NavItem>
        <S.NavItem href="#">메뉴명</S.NavItem>
      </S.Nav>
      <S.MobileMenuButton onClick={() => openNavModal()}>
        메뉴
      </S.MobileMenuButton>
      <S.LogoText>혼자살때</S.LogoText>
      <S.RightMenu>
        <S.NavItem href="#">로그인</S.NavItem>
        <S.NavItem href="#">회원가입</S.NavItem>
      </S.RightMenu>
      <S.MobileRightMenu></S.MobileRightMenu>
    </S.Container>
  );
};

export default Header;
