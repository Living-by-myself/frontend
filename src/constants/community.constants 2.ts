export const COMMUNITY_CATEGORIES = {
  ALL: {
    name: "전체",
    value: "all",
  },
  CLEAN: {
    name: "청소",
    value: "clean",
  },
  FOOD: {
    name: "음식",
    value: "food",
  },
  ETC: {
    name: "기타",
    value: "etc",
  },
} as const;

export const COMMUNITY_FILTERS = {
  LATEST: {
    name: "최신순",
    value: "latest",
  },
  LIKE: {
    name: "좋아요 많은 순",
    value: "like",
  },
  COMMENT: {
    name: "댓글 많은 순",
    value: "comment",
  },
} as const;
