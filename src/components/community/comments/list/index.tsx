import styled from "styled-components";
import CommentCard from "../commentCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const PostDetailCommentList = () => {
  const param = useParams();

  const [comment, setComment] = useState("");

  const getComment = async () => {
    axios
      .get(
        `https://tracelover.shop/home/communities/${param.id}/comments?page=0&size=10`,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${localStorage.getItem("accessToken")}`,
          },
        },
      )
      .then((response) => {
        console.log(response.data);
        setComment(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (param.id) {
      getComment();
    }
  }, []);

  return (
    <S.Container>
      <S.HeaderArea>
        <S.Label>댓글</S.Label>
        <S.CommentCnt>1개</S.CommentCnt>
        <S.Filter>등록일</S.Filter>
        <S.FilterBtn>최신순</S.FilterBtn>
      </S.HeaderArea>

      {/* 댓글 카드 MAP함수 적용 */}
      {/* <CommentCard /> */}
      {/* <CommentCard /> */}
      {/* <CommentCard /> */}
      {/* <CommentCard /> */}
      {/* <CommentCard /> */}
    </S.Container>
  );
};

export default PostDetailCommentList;

const S = {
  Container: styled.div``,
  HeaderArea: styled.div`
    margin: 13px 0 16px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
  Label: styled.p`
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
  `,
  CommentCnt: styled.p``,
  Filter: styled.p`
    margin-left: auto;
  `,
  FilterBtn: styled.button`
    font-size: ${({ theme }) => theme.fontSizes.xs};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    background-color: transparent;
    outline: none;
    border: none;
  `,
};
