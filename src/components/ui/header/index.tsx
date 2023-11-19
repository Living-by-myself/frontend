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
import SearchBar from "@/components/search/searchBar";
import { useState } from "react";
import useUserStore from "@/store/useUserStore";
import Avatar from "@/components/common/avatar";

const Header = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const overlay = useOverlay();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { profile, token, isLogged } = useUserStore();
  console.log(profile, token, isLogged);

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

        <S.LogoContainer>
          <Logo />
        </S.LogoContainer>

        <S.RightMenu>
          <SearchBar />
          {isLogged ? (
            <>
              <Button variants="icon" onClick={() => navigate("/mypage")}>
                <Icon name="bell" color="#212121" />
              </Button>
              <Link to="/mypage">
                <Avatar src={profile?.profileImage} />
              </Link>
            </>
          ) : (
            <Button onClick={() => navigate("/login")} variants="contain">
              로그인
            </Button>
          )}
        </S.RightMenu>

        <S.MobileRightMenu>
          <Button variants="icon" onClick={() => setIsOpenSearch(true)}>
            <Icon name="search" color="#212121" />
          </Button>
        </S.MobileRightMenu>

        {isOpenSearch && (
          <S.SearchFullContainer>
            <SearchBar style={{ width: "100%" }} />
            <Button variants="outline" onClick={() => setIsOpenSearch(false)}>
              닫기
            </Button>
          </S.SearchFullContainer>
        )}
      </S.Header>
    </S.Container>
  );
};

export default Header;
