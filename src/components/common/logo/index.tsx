import logo from "/logo.svg";

interface LogoProps {
  height?: number;
}

const Logo = ({ height = 24 }: LogoProps) => {
  return <img src={logo} height={height} />;
};

export default Logo;
