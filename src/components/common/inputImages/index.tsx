import React, { forwardRef } from "react";
import * as S from "./styles";

import Icon from "../icon";
import theme from "@/styles/theme";
import ImagePreview from "@/components/image/imagePreview";

interface InputImagesProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: "file";
  maxImageNum: number;
  currentImageNum: number;
  onRemoveFile?: (fileList: FileList) => void;
}

const InputImages = forwardRef<HTMLInputElement, InputImagesProps>(
  (
    {
      type = "file",
      accept = "image/png, image/jpeg",
      id = "images",
      currentImageNum,
      maxImageNum,
      onRemoveFile,
      ...props
    },
    ref,
  ) => {
    const [files, setFiles] = React.useState<File[]>([]);

    const inputFileRef = React.useRef<HTMLInputElement | null>(null);

    const handleClick = () => {
      if (!inputFileRef.current) return;
      inputFileRef.current.click();
    };

    const changeFiles = (fileList: FileList) => {
      setFiles(
        fileList.length > maxImageNum
          ? Array.from(fileList).slice(0, maxImageNum)
          : Array.from(fileList),
      );
    };

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files) return;
      const dataTransfer = new DataTransfer();

      if (files.length > 0) {
        files.forEach((file) => {
          dataTransfer.items.add(file);
        });
      }

      const restSlot = Math.min(
        e.target.files.length,
        maxImageNum - files.length,
      );

      Array.from(e.target.files)
        .slice(0, restSlot)
        .forEach((file) => {
          dataTransfer.items.add(file);
        });

      e.target.files = dataTransfer.files;

      if (props.onChange) {
        props.onChange(e);
      }
      changeFiles(e.target.files);
    };

    const removeImage = (index: number) => {
      const dataTransfer = new DataTransfer();

      const newArray = Array.from(files);
      newArray.splice(index, 1);

      newArray.forEach((file) => {
        dataTransfer.items.add(file);
      });

      if (onRemoveFile) {
        onRemoveFile(dataTransfer.files);
      }
      changeFiles(dataTransfer.files);
    };

    return (
      <>
        <S.InputFile
          type={type}
          accept={accept}
          id={id}
          {...props}
          onChange={onChange}
          ref={(inputRef) => {
            if (ref) {
              if (typeof ref === "function") {
                ref(inputRef);
              } else {
                ref.current = inputRef;
              }
            }
            inputFileRef.current = inputRef;
          }}
          hidden
        />
        <S.InputButton onClick={handleClick} type="button">
          <Icon name="camera" size={16} color={theme.colors.gray[500]} />
          <S.FileCount>{`${currentImageNum}/${maxImageNum}`}</S.FileCount>
        </S.InputButton>
        {files.map((file, index) => (
          <ImagePreview
            key={index + file.lastModified + file.name}
            file={file}
            onClickRemove={() => removeImage(index)}
          />
        ))}
      </>
    );
  },
);

export default InputImages;
