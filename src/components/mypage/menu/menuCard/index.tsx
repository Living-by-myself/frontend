import Icon from "@/components/common/icon";
import styled from "styled-components";

interface MyPageMenuCardProps {
  children?: string;
}

const MyPageMenuCard = ({ children }: MyPageMenuCardProps) => {
  return (
    <S.Container>
      <S.Label>{children}</S.Label>
      <Icon name="chevron-right" size={16} />
    </S.Container>
  );
};

export default MyPageMenuCard;

const S = {
  Container: styled.div`
    padding: 16px 16px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray[200]};
    display: flex;
    justify-content: space-between;
  `,
  Label: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
  `,
  Arrow: styled.div``,
};
