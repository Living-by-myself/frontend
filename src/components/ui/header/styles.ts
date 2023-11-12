import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 12px 20px;
`;

export const LogoText = styled.p``;

export const Nav = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MobileMenuButton = styled.button`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a``;

export const RightMenu = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MobileRightMenu = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;
