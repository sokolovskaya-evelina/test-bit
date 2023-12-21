import {mediaQueries} from "./mediaQueries"
import {sizes} from "./sizes"
import {desktopVariables, mobileVariables, tabletVariables} from "./variables";

interface ITheme {
    colors: typeof lightThemeColors
    mediaQueries: typeof mediaQueries
    sizes: typeof sizes
    variables: typeof desktopVariables
}

export enum ThemeColorNames {
    Dark = 'Dark',
    Light = 'Light'
}

export enum SizeNames {
    Desktop = 'Desktop',
    Tablet = 'Tablet',
    Mobile = 'Mobile'
}

export enum ThemeNames {
    MobileDark = 'mobileDark',
    TabletDark = 'tabletDark',
    DesktopDark = 'desktopDark',
    MobileLight = 'mobileLight',
    TabletLight = 'tabletLight',
    DesktopLight = 'desktopLight',
}

const commonColors = {
    primary: 'rgba(28, 100, 242, 1)',
    primaryLight: 'rgba(71, 133, 255, 1)',
    aqua: 'rgba(28, 178, 242, 1)',
    critic: 'rgba(254, 66, 66, 1)',
    green: 'rgba(26, 187, 52, 1)',
    orange: 'rgba(242, 156, 28, 1)',
    pink: 'rgba(238, 28, 242, 1)',
    purple: 'rgba(148, 28, 242, 1)',
    yellow: 'rgba(242, 221, 28, 1)',
    strong: 'rgba(7, 60, 164, 1)',
    strongDown: 'rgba(14, 49, 118, 1)',
}

export const darkThemeColors = {
    baseBlack: 'rgba(14, 12, 21, 1)',
    baseWhite: 'rgba(255, 255, 255, 1)',
    gray1: 'rgba(97, 109, 141, 1)',
    gray2: 'rgba(49, 62, 98, 1)',
    gray3: 'rgba(34, 43, 68, 1)',
    gray4: 'rgba(18, 24, 37, 1)',
    gray5: 'rgba(55, 65, 81, 1)',
    gray6: 'rgba(156, 163, 175, 1)',
    ...commonColors,
};

export const lightThemeColors = {
    baseBlack: 'rgba(255, 255, 255, 1)',
    baseWhite: 'rgba(14, 12, 21, 1)',
    gray1: 'rgba(173, 184, 192, 1)',
    gray2: 'rgba(205, 213, 218, 1)',
    gray3: 'rgba(219, 224, 228, 1)',
    gray4: 'rgba(245, 246, 247, 1)',
    gray5: 'rgba(173, 181, 189, 1)',
    gray6: 'rgba(221, 232, 243, 1)',
    ...commonColors,
};

export const mobileLightTheme: ITheme = {
    colors: lightThemeColors,
    variables: mobileVariables,
    mediaQueries,
    sizes,
}

export const mobileDarkTheme: ITheme = {
    colors: darkThemeColors,
    variables: mobileVariables,
    mediaQueries,
    sizes,
}

export const tabletLightTheme: ITheme = {
    colors: lightThemeColors,
    variables: tabletVariables,
    mediaQueries,
    sizes,
}

export const tabletDarkTheme: ITheme = {
    colors: darkThemeColors,
    variables: tabletVariables,
    mediaQueries,
    sizes,
}

export const desktopLightTheme: ITheme = {
    colors: lightThemeColors,
    variables: desktopVariables,
    mediaQueries,
    sizes,
}

export const desktopDarkTheme: ITheme = {
    colors: darkThemeColors,
    variables: desktopVariables,
    mediaQueries,
    sizes,
}

export const themes: Record<ThemeNames, ITheme> = {
    [ThemeNames.DesktopDark]: desktopDarkTheme,
    [ThemeNames.DesktopLight]: desktopLightTheme,
    [ThemeNames.TabletDark]: tabletDarkTheme,
    [ThemeNames.TabletLight]: tabletLightTheme,
    [ThemeNames.MobileDark]: mobileDarkTheme,
    [ThemeNames.MobileLight]: mobileLightTheme,
}
