import { CommunityWriteFormData } from "@/types/form.types";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputImages from "@/components/common/inputImages";

const schema = z.object({
  title: z
    .string()
    .min(2, { message: "2자 이상의 제목을 입력해주세요." })
    .max(20, { message: "20자 이내의 제목을 입력해주세요." }),
  description: z
    .string()
    .min(10, { message: "10자 이상의 내용을 입력해주세요." }),
  images: z.custom<FileList>(),
});

const CommunityWriteForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<CommunityWriteFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  return (
    <div>
      <InputImages
        currentImageNum={watch("images")?.length || 0}
        maxImageNum={5}
        multiple
        {...register("images")}
        onRemoveFile={(fileList) => setValue("images", fileList)}
      />
    </div>
  );
};

export default CommunityWriteForm;
