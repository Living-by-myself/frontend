import { MobileContainer } from "@/styles/commonStyles";

import { S } from "./styles";
import CommunityPost from "@/components/community/post";

const CommunityPage = () => {
  return (
    <MobileContainer>
      <S.FilterArea>
        <S.FilterBtn>최신순</S.FilterBtn>
        <S.FilterBtn>좋아요순</S.FilterBtn>
        <S.FilterBtn>댓글 많은 순</S.FilterBtn>
      </S.FilterArea>
      <CommunityPost></CommunityPost>
      {/* <Button
        variants={"outline"}
        color={"primary"}
        size={"sm"}
        disabled={false}
        children={"버튼"}
        onClick={() => {}}
      ></Button> */}
    </MobileContainer>
  );
};

export default CommunityPage;
