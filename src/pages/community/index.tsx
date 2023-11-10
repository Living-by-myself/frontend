import { MobileContainer } from "@/styles/commonStyles";

import { S } from "./styles";
import CommunityPost from "@/components/community/post";

const dummy = [
  {
    id: 6,
    viewCnt: 0,
    title: "제제목목",
    description: "내내용용",
    category: "CLEAN",
    userId: 1,
    userNickname: "wer06099@naver.com",
    getCreatedAtAsString: "2023-11-08 14:56:26",
    commentCnt: 0,
    likeCnt: 0,
    fileUrls:
      "https://tracelover.s3.ap-northeast-2.amazonaws.com/b82b98c4-5b30-4a5d-9019-0ff0372ea0c9test1.png",
  },
  {
    id: 5,
    viewCnt: 0,
    title: "제제목목",
    description: "내내용용",
    category: "CLEAN",
    userId: 1,
    userNickname: "wer06099@naver.com",
    getCreatedAtAsString: "2023-11-07 16:56:43",
    commentCnt: 0,
    likeCnt: 0,
    fileUrls: null,
  },
  {
    id: 2,
    viewCnt: 0,
    title: "제제목목",
    description: "내내용용",
    category: "CLEAN",
    userId: 1,
    userNickname: "wer06099@naver.com",
    getCreatedAtAsString: "2023-11-07 16:46:00",
    commentCnt: 0,
    likeCnt: 0,
    fileUrls:
      "https://tracelover.s3.ap-northeast-2.amazonaws.com/0452f63f-8379-4a49-a2fc-b1100ea50346",
  },
  {
    id: 1,
    viewCnt: 0,
    title: "제제목목",
    description: "내내용용",
    category: "CLEAN",
    userId: 1,
    userNickname: "wer06099@naver.com",
    getCreatedAtAsString: "2023-11-07 16:24:40",
    commentCnt: 2,
    likeCnt: 1,
    fileUrls:
      "https://tracelover.s3.ap-northeast-2.amazonaws.com/9f7a9afc-35ff-4231-90e6-ff35ca3a888a",
  },
];

export interface Post {
  id: number;
  viewCnt: number;
  title: string;
  description: string;
  category: string;
  userId: number;
  userNickname: string;
  getCreatedAtAsString: string;
  commentCnt: number;
  likeCnt: number;
  fileUrls: string | null;
}

const CommunityPage = () => {
  // 무한스크롤 로직 필요

  return (
    <MobileContainer>
      <S.FilterArea>
        <S.FilterBtn>최신순</S.FilterBtn>
        <S.FilterBtn>좋아요순</S.FilterBtn>
        <S.FilterBtn>댓글 많은 순</S.FilterBtn>
      </S.FilterArea>
      {dummy.map((post: Post) => {
        return (
          <CommunityPost
            key={post.id}
            id={post.id}
            title={post.title}
            description={post.description}
            getCreatedAtAsString={post.getCreatedAtAsString}
            viewCnt={post.viewCnt}
            category={post.category}
            commentCnt={post.commentCnt}
            likeCnt={post.likeCnt}
            fileUrls={post.fileUrls}
            userId={0}
            userNickname={""}
          />
        );
      })}
      {/* <CommunityPost></CommunityPost> */}
    </MobileContainer>
  );
};

export default CommunityPage;
