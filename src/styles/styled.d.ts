import "styled-components";
import {
  BreakPointsTypes,
  ColorsTypes,
  FontSizesTypes,
  FontWeightsTypes,
} from "./theme";

declare module "styled-components" {
  export interface DefaultTheme {
    fontSizes: FontSizesTypes;
    colors: ColorsTypes;
    breakPoints: BreakPointsTypes;
    fontWeights: FontWeightsTypes;
  }
}
