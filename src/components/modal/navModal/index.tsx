import BaseModal from "@/components/common/baseModal";
import Icon from "@/components/common/icon";
import * as S from "./styles";
import { NAV_LINKS } from "@/constants/common.constants";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/common/logo";
import Button from "@/components/common/button";
import ProfilePreview from "@/components/ui/profilePreview";
import useUserStore from "@/store/useUserStore";
import useLogoutMutation from "@/queries/useLogoutMutation";

interface NavModalProps {
  onClose: () => void;
}

const NavModal = ({ onClose }: NavModalProps) => {
  const navigate = useNavigate();
  const { isLogged } = useUserStore();
  const logoutMutation = useLogoutMutation();

  const handleLogout = async () => {
    logoutMutation.mutate();
  };

  return (
    <BaseModal onClose={onClose} side="left">
      <S.Container>
        <S.Nav>
          <Logo />
          {isLogged && <ProfilePreview />}
          <S.LinkList>
            {NAV_LINKS.map((link) => (
              <S.LinkItem
                to={link.href}
                key={link.id}
                onClick={() => onClose()}
              >
                <Icon name={link.icon} /> {link.name}
              </S.LinkItem>
            ))}
          </S.LinkList>
        </S.Nav>
        <S.Bottom>
          {isLogged ? (
            <>
              <Button full variants="outline" onClick={handleLogout}>
                로그아웃
              </Button>
            </>
          ) : (
            <>
              {" "}
              <Button full onClick={() => navigate("/login")}>
                로그인
              </Button>
              <Button
                full
                variants="outline"
                onClick={() => navigate("/signup")}
              >
                회원가입
              </Button>
            </>
          )}
        </S.Bottom>
      </S.Container>
    </BaseModal>
  );
};

export default NavModal;
