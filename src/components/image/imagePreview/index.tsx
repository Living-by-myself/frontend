import Icon from "@/components/common/icon";
import * as S from "./styles";
import theme from "@/styles/theme";

interface ImagePreviewProps {
  file: File;
  onClickRemove?: () => void;
}

const ImagePreview = ({ file, onClickRemove }: ImagePreviewProps) => {
  return (
    <S.Container>
      <S.ImagePreview src={URL.createObjectURL(file)} alt="preview" />
      {onClickRemove && (
        <S.RemoveButton type="button" onClick={onClickRemove}>
          <Icon name="x" size={14} color={theme.colors.gray[600]} />
        </S.RemoveButton>
      )}
    </S.Container>
  );
};

export default ImagePreview;
