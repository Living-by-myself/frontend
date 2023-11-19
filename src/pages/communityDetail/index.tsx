import { useEffect, useState } from "react";
import PostDetailCommentInput from "@/components/community/comments/commentInput";
import PostDetailCommentList from "@/components/community/comments/list";
import PostDetailLikes from "@/components/community/postDetail/like";
import PostDetailBody from "@/components/community/postDetail/postBody";
import PostDetailUser from "@/components/community/postDetail/user";
import { MobileContainer } from "@/styles/commonStyles";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import axios from "axios";

const dummy = {
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
};

export const userInfo = {
  userId: 1,
  getCreatedAtAsString: "2023-11-08 14:56:26",
};

export interface PostDetailProps {
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

const CommunityDetailPage = () => {
  // 리액트 쿼리활용 아이디값 기준의 값을 GET!
  const param = useParams();
  const id = param.id;

  const [post, setPost] = useState<PostDetailProps>();

  const getPostDetail = async (postId: string | undefined) => {
    try {
      const response = await axios({
        method: "get",
        url: `https://tracelover.shop/home/communities/${postId}`,
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${localStorage.getItem("accessToken")}`,
        },
      });

      if (response.status === 403) {
        throw new Error("401");
      }
      if (!response) return null;
      console.log(response.data);
      setPost(response.data as PostDetailProps);
    } catch (error) {
      throw new Error("실패");
    }
  };

  useEffect(() => {
    getPostDetail(id);
  }, []);

  return (
    <MobileContainer>
      <S.Container>
        <S.CategoryContainer> 인기글</S.CategoryContainer>

        {/* 유저정보 컴포넌트 */}
        <PostDetailUser
          userId={post?.userId}
          getCreatedAtAsString={post?.getCreatedAtAsString}
        />

        {/* 게시글 본문 컴포넌트 */}
        <PostDetailBody post={post} />

        {/* 좋아요 버튼 컴포넌트 */}
        <PostDetailLikes />

        {/* 댓글 입력 컴포넌트 */}
        <PostDetailCommentInput />

        {/* 중간 간지 */}
        <S.Line />

        {/* 댓글  */}
        <PostDetailCommentList />

        {/* 중간 간지 */}
        <S.Line />
      </S.Container>
    </MobileContainer>
  );
};

export default CommunityDetailPage;

const S = {
  Container: styled.div`
    padding: 12px 0 0;
    width: 100%;
  `,
  CategoryContainer: styled.div`
    font-size: ${({ theme }) => theme.fontSizes.xxs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 7px;
  `,
  Line: styled.div`
    width: 100%;

    height: 7px;
    background-color: ${({ theme }) => theme.colors.gray[200]};
    margin: 15px 0;
  `,
};
