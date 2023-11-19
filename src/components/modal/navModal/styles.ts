import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.gray[300]};
  height: 100%;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.gray[0]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 0.2rem;
`;

export const LinkItem = styled(Link)`
  padding: 1.3rem 2rem;
  border-radius: 0.5rem;
  text-decoration: none;
  display: flex;
  gap: 1rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.gray[800]};
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const Nav = styled.nav``;

export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
