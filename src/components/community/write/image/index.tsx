import Icon from "@/components/common/icon";
import { useCommunityWriteStore } from "@/store/useCommunityStore";
import { useRef, useState } from "react";
import styled from "styled-components";

const CommunityWriteImage = () => {
  // const [files, setFiles] = useCommunityWriteStore();
  // const [img, setImg] = useState<File[] | null>(null)

  const inputRef = useRef<HTMLInputElement>(null);
  const file = useCommunityWriteStore((state) => state.file);

  return (
    <S.Container>
      <S.Button
        onClick={() => {
          inputRef.current?.click();
        }}
      >
        <Icon name="camera" size={16} />
        {/* <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          style={{ display: "none" }}
          onChange={(e) => {
            if (e.target.files) {
              // setImg(e.target.files);
              // setFiles(e.target.files);
              file.set(e.target.files);
            }
          }} */}
        {/* /> */}

        <S.ImageCounter>0 / 5</S.ImageCounter>
      </S.Button>
      <S.ImageArea>
        {/* <S.Image src="https://via.placeholder.com/46" />
        <S.Image src="https://via.placeholder.com/46" />
        <S.Image src="https://via.placeholder.com/46" />
        <S.Image src="https://via.placeholder.com/46" />
        <S.Image src="https://via.placeholder.com/46" /> */}
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
