import {desktopDarkTheme} from "./index";

type CustomTheme = typeof desktopDarkTheme

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends CustomTheme {}
}
