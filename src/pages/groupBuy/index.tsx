import Button from "@/components/common/button";
import Checkbox from "@/components/common/checkbox";
import Label from "@/components/common/label";
import Title from "@/components/common/title";
import CategoryModal from "@/components/groupBuy/categoryModal";
import FilterModal from "@/components/groupBuy/filterModal";
import GroupBuyPreview from "@/components/groupBuy/groupBuyPreview";
import {
  GROUP_BUY_CATEGORIES,
  GROUP_BUY_SORT,
} from "@/constants/groupBuy.constants";
import useOverlay from "@/hooks/useOverlay";
import { MobileContainer } from "@/styles/commonStyles";
import {
  GroupBuyCategoriesValues,
  GroupBuyPreviewType,
  GroupBuySortValues,
} from "@/types/groupBuy.types";

import { useState } from "react";

const DUMMY_DATA: GroupBuyPreviewType[] = [
  {
    id: 1,
    title: "폴라로이드 카메라 필름 4명 공동구매합니다",
    maxUser: 4,
    currentUserCount: 1,
    fileUrls: "https://placehold.co/100",
    perUserPrice: 900000,
    enumShare: "BUY",
    address: "서울시 강남구",
    createdAt: "2023-11-16T19:47:16.488675",
    modifiedAt: "2023-11-16T19:47:16.488675",
    viewCnt: 0,
    beobJeongDong: "12345",
  },
  {
    id: 2,
    title: "폴라로이드 카메라 필름 4명 공동구매합니다",
    maxUser: 4,
    currentUserCount: 1,
    fileUrls: "https://placehold.co/100",
    perUserPrice: 900000,
    enumShare: "BUY",
    address: "서울시 강남구",
    createdAt: "2023-11-16T19:47:16.488675",
    modifiedAt: "2023-11-16T19:47:16.488675",
    viewCnt: 0,
    beobJeongDong: "12345",
  },
  {
    id: 3,
    title: "폴라로이드 카메라 필름 4명 공동구매합니다",
    maxUser: 4,
    currentUserCount: 1,
    fileUrls: "https://placehold.co/100",
    perUserPrice: 900000,
    enumShare: "BUY",
    address: "서울시 강남구",
    createdAt: "2023-11-16T19:47:16.488675",
    modifiedAt: "2023-11-16T19:47:16.488675",
    viewCnt: 0,
    beobJeongDong: "12345",
  },
  {
    id: 4,
    title: "폴라로이드 카메라 필름 4명 공동구매합니다",
    maxUser: 4,
    currentUserCount: 1,
    fileUrls: "https://placehold.co/100",
    perUserPrice: 900000,
    enumShare: "BUY",
    address: "서울시 강남구",
    createdAt: "2023-11-16T19:47:16.488675",
    modifiedAt: "2023-11-16T19:47:16.488675",
    viewCnt: 0,
    beobJeongDong: "12345",
  },
];

const getCategoryName = (category: GroupBuyCategoriesValues) => {
  const foundCategory = Object.values(GROUP_BUY_CATEGORIES).find(
    (c) => c.value === category,
  );
  return foundCategory ? foundCategory.name : "카테고리";
};

const getFilterName = (filter: GroupBuySortValues) => {
  const foundFilter = Object.values(GROUP_BUY_SORT).find(
    (c) => c.value === filter,
  );
  return foundFilter ? foundFilter.name : "필터";
};

import { useMemo } from "react";
import { Link } from "react-router-dom";

const GroupBuyPage = () => {
  const overlay = useOverlay();
  const [category, setCategory] = useState<GroupBuyCategoriesValues>("ALL");
  const [filter, setFilter] = useState<GroupBuySortValues>("asc");

  const openCategoryModal = (
    category: GroupBuyCategoriesValues,
  ): Promise<GroupBuyCategoriesValues> => {
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
    filter: GroupBuySortValues,
  ): Promise<GroupBuySortValues> => {
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

  return (
    <MobileContainer>
      <div>
        <Title level={1} style={{ textAlign: "center" }}>
          공동구매
        </Title>
        <div style={{ display: "flex", gap: "1rem" }}>
          <Button
            variants="outline"
            size="sm"
            onClick={handleOpenCategoryModal}
          >
            {categoryName}
          </Button>
          <Button variants="outline" size="sm" onClick={handleOpenFilterModal}>
            {filterName}
          </Button>
        </div>
      </div>
      <div>
        <Checkbox id="toggleOnlySell" />
        <Label htmlFor="toggleOnlySell">모집중만 보기</Label>
      </div>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {DUMMY_DATA.map((data) => {
          return (
            <li key={data.id} style={{ borderBottom: "1px solid #eee" }}>
              <Link to={`/group-buy/${data.id}`}>
                <GroupBuyPreview data={data} />
              </Link>
            </li>
          );
        })}
      </ul>
    </MobileContainer>
  );
};

export default GroupBuyPage;
