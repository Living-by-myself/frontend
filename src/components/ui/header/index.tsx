import NavModal from "@/components/modal/navModal";
import useOverlay from "../../../hooks/useOverlay";
import * as S from "./styles";
import Link from "@/components/common/link";
import Button from "@/components/common/button";
import { useLocation, useNavigate } from "react-router-dom";
import theme from "@/styles/theme";
import Icon from "@/components/common/icon";
import { NAV_LINKS } from "@/constants/common.constants";
import Logo from "@/components/common/logo";

const Header = () => {
  const overlay = useOverlay();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const openNavModal = () => {
    overlay.open(({ close }) => <NavModal onClose={close} />);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Nav>
          {NAV_LINKS.map((nav) => (
            <Link
              to={nav.href}
              key={nav.id}
              style={{
                fontWeight: "bold",
                color:
                  nav.href === pathname
                    ? theme.colors.gray[700]
                    : theme.colors.gray[400],
              }}
            >
              {nav.name}
            </Link>
          ))}
        </S.Nav>
        <S.MobileMenuButton onClick={() => openNavModal()}>
          <Button variants="icon">
            <Icon name="menu" color="#212121" />
          </Button>
        </S.MobileMenuButton>
        <Logo />
        <S.RightMenu>
          <Button onClick={() => navigate("/login")} variants="text">
            로그인
          </Button>
        </S.RightMenu>
        <S.MobileRightMenu></S.MobileRightMenu>
      </S.Header>
    </S.Container>
  );
};

export default Header;
