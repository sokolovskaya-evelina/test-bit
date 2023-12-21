import {sizes} from "./sizes";

export const mediaQueries = {
  mobile: `@media all and (max-width: ${sizes.mobileMaxWidth}px)`,
  tablet: `@media all and (min-width: ${sizes.tabletMinWidth}px) and (max-width: ${sizes.tabletMaxWidth}px)`,
  desktop: `@media all and (min-width: ${sizes.desktopMinWidth}px)`,
}
