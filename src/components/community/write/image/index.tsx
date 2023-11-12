import Icon from "@/components/common/icon";
import styled from "styled-components";

const CommunityWriteImage = () => {
  return (
    <S.Container>
      <S.Button>
        <Icon name="camera" size={16} />
        <S.ImageCounter>0 / 5</S.ImageCounter>
      </S.Button>
      <S.ImageArea>
        <S.Image src="https://via.placeholder.com/46" />
        <S.Image src="https://via.placeholder.com/46" />
        <S.Image src="https://via.placeholder.com/46" />
        <S.Image src="https://via.placeholder.com/46" />
        <S.Image src="https://via.placeholder.com/46" />
      </S.ImageArea>
    </S.Container>
  );
};

export default CommunityWriteImage;

const S = {
  Container: styled.div`
    width: 100%;
    padding-top: 20px;

    display: flex;
    gap: 8px;
  `,
  Button: styled.button`
    width: 46px;
    height: 46px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid var(--gray-400, #9ca3af);
    background-color: transparent;
  `,
  ImageCounter: styled.div`
    color: ${({ theme }) => theme.colors.gray[400]};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
  ImageArea: styled.div`
    display: flex;
    gap: 8px;
  `,
  Image: styled.img`
    background-color: green;
    border-radius: 10px;
    overflow: hidden;
  `,
};
