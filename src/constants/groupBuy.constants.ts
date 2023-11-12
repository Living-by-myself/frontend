export const GROUP_BUY_CATEGORIES = {
  ALL: {
    name: "전체",
    value: "all",
  },
  FOOD: {
    name: "음식",
    value: "food",
  },
  NECESSITY: {
    name: "생필품",
    value: "necessity",
  },
  ETC: {
    name: "기타",
    value: "etc",
  },
} as const;

export const GROUP_BUY_FILTERS = {
  LATEST: {
    name: "최신순",
    value: "latest",
  },
  LOW_PRICE: {
    name: "낮은 가격순",
    value: "lowPrice",
  },
} as const;
