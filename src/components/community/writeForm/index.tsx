import { CommunityWriteFormData } from "@/types/form.types";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputImages from "@/components/common/inputImages";
import styled from "styled-components";
import CommunityWriteCategory from "../write/category";
import CommunityWriteText from "../write/textArea";
import Button from "@/components/common/button";

const schema = z.object({
  title: z
    .string()
    .min(2, { message: "2자 이상의 제목을 입력해주세요." })
    .max(20, { message: "20자 이내의 제목을 입력해주세요." }),
  description: z
    .string()
    .min(10, { message: "10자 이상의 내용을 입력해주세요." }),
  category: z.enum(["clean", "interior", "cook", "free"]),
  images: z.custom<FileList>(),
});

const CommunityWriteForm = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
    watch,
    setValue,
  } = useForm<CommunityWriteFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      category: "free",
    },
  });

  return (
    <S.Container>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        {/* 작성버튼을 눌러야함 근데 그 작성버튼은 상위 컴포넌트에 있어야함 */}
        <Button type="submit" onClick={() => {}}>
          작성
        </Button>
        {/* 카테고리 */}
        <CommunityWriteCategory watch={watch} setValue={setValue} />

        {/* 이미지 */}
        <S.ImageContainer>
          <InputImages
            currentImageNum={watch("images")?.length || 0}
            maxImageNum={5}
            multiple
            {...register("images")}
            onRemoveFile={(fileList) => setValue("images", fileList)}
          />
        </S.ImageContainer>
        {/* 작성 */}
        <CommunityWriteText setValue={setValue} watch={watch} />
      </form>
    </S.Container>
  );
};

export default CommunityWriteForm;

const S = {
  Container: styled.div``,
  ImageContainer: styled.div`
    display: flex;
    gap: 1rem;
    padding: 1rem;
  `,
};
