import { MobileContainer } from "@/styles/commonStyles";

import { S } from "./styles";
import CommunityPost from "@/components/community/post";
import RoundButton from "@/components/common/roundButton";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import {
  CommunityCategoriesValues,
  CommunityFiltersValues,
} from "@/types/types";
import CategoryModal from "@/components/community/categoryModal";
import {
  COMMUNITY_CATEGORIES,
  COMMUNITY_FILTERS,
} from "@/constants/community.constants";
import useOverlay from "@/hooks/useOverlay";
import FilterModal from "@/components/community/filterModal";

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

const getCategoryName = (category: CommunityCategoriesValues) => {
  const foundCategory = Object.values(COMMUNITY_CATEGORIES).find(
    (c) => c.value === category,
  );
  return foundCategory ? foundCategory.name : "카테고리";
};

const getFilterName = (filter: CommunityFiltersValues) => {
  const foundFilter = Object.values(COMMUNITY_FILTERS).find(
    (c) => c.value === filter,
  );
  return foundFilter ? foundFilter.name : "필터";
};

const CommunityPage = () => {
  // 무한스크롤 로직 필요
  // 리액트 쿼리로 리팩토링 필요함
  const [posts, setPost] = useState<Post[]>([]);

  const overlay = useOverlay();
  const [category, setCategory] = useState<CommunityCategoriesValues>("all");
  const [filter, setFilter] = useState<CommunityFiltersValues>("latest");

  const openCategoryModal = (
    category: CommunityCategoriesValues,
  ): Promise<CommunityCategoriesValues> => {
    return new Promise((resolve) => {
      overlay.open(({ close }) => (
        <CategoryModal
          initCategory={category}
          onConfirm={(c) => {
            resolve(c);
            close();
          }}
          onClose={() => {
            resolve(category);
            close();
          }}
        />
      ));
    });
  };

  const openFilterModal = (
    filter: CommunityFiltersValues,
  ): Promise<CommunityFiltersValues> => {
    return new Promise((resolve) => {
      overlay.open(({ close }) => (
        <FilterModal
          initFilter={filter}
          onConfirm={(f) => {
            resolve(f);
            close();
          }}
          onClose={() => {
            resolve(filter);
            close();
          }}
        />
      ));
    });
  };

  const categoryName = useMemo(() => getCategoryName(category), [category]);
  const filterName = useMemo(() => getFilterName(filter), [filter]);

  const handleOpenCategoryModal = async () => {
    const confirm = await openCategoryModal(category);
    setCategory(confirm);
  };

  const handleOpenFilterModal = async () => {
    const confirm = await openFilterModal(filter);
    setFilter(confirm);
  };

  // 데이터 서버에서 받아오는 로직 리액트 쿼리화 필요
  const getPosts = async () => {
    axios({
      method: "get",
      url: "https://tracelover.shop/home/communities",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log(response);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  // 글이 잘들어오는지 테스트해봐야함
  // if (posts.length === 0) {
  //   return (
  //     <MobileContainer>아무런 글도 작성되어있지가 않음...!</MobileContainer>
  //   );
  // }

  return (
    <MobileContainer>
      <S.FilterArea>
        <RoundButton
          onClick={handleOpenCategoryModal}
          isCheck={true}
          children={categoryName}
        />
        <RoundButton
          onClick={handleOpenFilterModal}
          isCheck={false}
          children={filterName}
        />
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
