import BaseModal from "@/components/common/baseModal";
import Icon from "@/components/common/icon";
import * as S from "./styles";
import { NAV_LINKS } from "@/constants/common.constants";
import { useNavigate } from "react-router-dom";
import Logo from "@/components/common/logo";
import Button from "@/components/common/button";

interface NavModalProps {
  onClose: () => void;
}

const NavModal = ({ onClose }: NavModalProps) => {
  const navigate = useNavigate();

  return (
    <BaseModal onClose={onClose} side="left">
      <S.Container>
        <S.Nav>
          <Logo />
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
          <Button full onClick={() => navigate("/login")}>
            로그인
          </Button>
          <Button full variants="outline" onClick={() => navigate("/signup")}>
            회원가입
          </Button>
        </S.Bottom>
      </S.Container>
    </BaseModal>
  );
};

export default NavModal;
