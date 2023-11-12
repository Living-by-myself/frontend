import BaseModal from "@/components/common/baseModal";
import Icon from "@/components/common/icon";
import * as S from "./styles";
import { NAV_LINKS } from "@/constants/common.constants";
import { useNavigate } from "react-router-dom";
import Link from "@/components/common/link";
import Logo from "@/components/common/logo";

interface NavModalProps {
  onClose: () => void;
}

const NavModal = ({ onClose }: NavModalProps) => {
  return (
    <BaseModal onClose={onClose} side="left">
      <S.Container>
        <Logo />
        <S.LinkList>
          {NAV_LINKS.map((link) => (
            <S.LinkItem to={link.href} key={link.id} onClick={() => onClose()}>
              <Icon name={link.icon} /> {link.name}
            </S.LinkItem>
          ))}
        </S.LinkList>
      </S.Container>
    </BaseModal>
  );
};

export default NavModal;
