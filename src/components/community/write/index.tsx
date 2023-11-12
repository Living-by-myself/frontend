import CommunityWriteCategory from "./category";
import CommunityWriteImage from "./image";
import CommunityWriteText from "./textArea";

const CommunityWrite = () => {
  return (
    <>
      {/* 카테고리 선택 */}
      <CommunityWriteCategory />

      {/* 이미지 선택 */}
      <CommunityWriteImage />

      {/* 제목 및 내용 쓰기 */}
      <CommunityWriteText />
    </>
  );
};

export default CommunityWrite;
