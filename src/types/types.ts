import {
  BADGE_VARIANTS,
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_VARIANTS,
  LINK_SIZE,
  SNS_BUTTONS,
  TITLE_LEVELS,
  TYPOGRAPHY_VARIANTS,
} from "@/constants/common.constants";
import {
  COMMUNITY_CATEGORIES,
  COMMUNITY_FILTERS,
} from "@/constants/community.constants";
import {
  GROUP_BUY_CATEGORIES,
  GROUP_BUY_FILTERS,
} from "@/constants/groupBuy.constants";
import { MODAL_SIDES } from "@/constants/modal.constants";

export type GroupBuyPreviewType = {
  id: number;
  title: string;
  max_user: number;
  current_user_count: number;
  image: string;
  price_per_user: number;
  enumShare: "SELL" | "SHARE";
  address: string;
  created_at: string;
};

export type ModalSides = (typeof MODAL_SIDES)[keyof typeof MODAL_SIDES];

export type GroupBuyCategories =
  (typeof GROUP_BUY_CATEGORIES)[keyof typeof GROUP_BUY_CATEGORIES];

export type GroupBuyCategoriesValues = GroupBuyCategories["value"];

export type CommunityCategories =
  (typeof COMMUNITY_CATEGORIES)[keyof typeof COMMUNITY_CATEGORIES];

export type CommunityCategoriesValues = CommunityCategories["value"];

export type CommunityFilters =
  (typeof COMMUNITY_FILTERS)[keyof typeof COMMUNITY_FILTERS];

export type CommunityFiltersValues = CommunityFilters["value"];

export type GroupBuyFilters =
  (typeof GROUP_BUY_FILTERS)[keyof typeof GROUP_BUY_FILTERS];

export type GroupBuyFiltersValues = GroupBuyFilters["value"];

export type ModalCommonProps = {
  onClose: () => void;
};

export type BadgeVariants =
  (typeof BADGE_VARIANTS)[keyof typeof BADGE_VARIANTS];

export type ButtonVariants =
  (typeof BUTTON_VARIANTS)[keyof typeof BUTTON_VARIANTS];

export type ButtonColors = (typeof BUTTON_COLORS)[keyof typeof BUTTON_COLORS];

export type ButtonSizes = (typeof BUTTON_SIZES)[keyof typeof BUTTON_SIZES];

export type ButtonFullWidth = boolean;

export type LinkSize = (typeof LINK_SIZE)[keyof typeof LINK_SIZE];
export type LinkBold = boolean;

export type SNS_Buttons = (typeof SNS_BUTTONS)[keyof typeof SNS_BUTTONS];

export type TitleLevels = (typeof TITLE_LEVELS)[keyof typeof TITLE_LEVELS];

export type TypographyVariants =
  (typeof TYPOGRAPHY_VARIANTS)[keyof typeof TYPOGRAPHY_VARIANTS];

export type TypographyBold = boolean;
