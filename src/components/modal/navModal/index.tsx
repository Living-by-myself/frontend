import BaseModal from "@/components/common/baseModal";
import Icon from "@/components/common/icon";
import * as S from "./styles";

const NAV_LINKS = [
  {
    name: "커뮤니티",
    path: "/community",
    icon: <Icon name="home" />,
  },
  {
    name: "공동구매",
    path: "/fairs",
    icon: <Icon name="store" />,
  },
];

interface NavModalProps {
  onClose: () => void;
}

const NavModal = ({ onClose }: NavModalProps) => {
  return (
    <BaseModal onClose={onClose} side="left">
      <S.Container>
        <p>NavModal</p>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a href={link.path}>{link.icon}</a>
            </li>
          ))}
        </ul>
      </S.Container>
    </BaseModal>
  );
};

export default NavModal;
