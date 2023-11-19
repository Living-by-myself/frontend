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
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/api/community-ys/getPostList";

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

  const { error, data, isLoading } = useQuery({
    queryKey: ["posts", category, filter],
    queryFn: getPosts,
  });

  // 글이 잘들어오는지 테스트해봐야함
  if (isLoading) {
    return (
      <MobileContainer>아무런 글도 작성되어있지가 않음...!</MobileContainer>
    );
  }

  if (error) {
    return <MobileContainer>에러 발생</MobileContainer>;
  }

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

      {data!.map((post: Post) => {
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
