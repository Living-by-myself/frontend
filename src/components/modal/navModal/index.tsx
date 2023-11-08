import BaseModal from "@/components/common/baseModal";
import Icon from "@/components/common/icon";

const Links = [
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
      <div
        style={{
          borderRight: "1px solid #ccc",
          height: "100%",
          backgroundColor: "#fff",
        }}
      >
        <p>NavModal</p>
        <ul>
          {Links.map((link) => (
            <li key={link.name}>
              <a href={link.path}>{link.icon}</a>
            </li>
          ))}
        </ul>
      </div>
    </BaseModal>
  );
};

export default NavModal;
