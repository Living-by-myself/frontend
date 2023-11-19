import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  align-items: center;
  height: 56px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.gray[0]};
`;

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 20px;
  position: relative;
`;

export const Nav = styled.nav`
  display: none;
  gap: 2rem;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const MobileMenuButton = styled.div`
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
    gap: 1rem;
    align-items: center;
  }
`;

export const MobileRightMenu = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SearchFullContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray[0]};
  position: absolute;
  width: 100%;
  height: calc(100% - 3px);
  display: flex;
  gap: 1rem;
  align-items: center;
  top: 0;
  left: 0;
  padding: 2rem;
`;

export const LogoContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
