import {ReactNode} from "react";
import {ThemeProvider} from "styled-components";
import {SizeNames, ThemeColorNames, ThemeNames, themes} from "../theme";
import useResizeWindow from "../../shared/hooks/useResizeWindow";
import {sizes} from "../theme/sizes";

const getThemeName = (size: number, theme: ThemeColorNames.Dark | ThemeColorNames.Light): ThemeNames => {
    let sizeName: SizeNames.Mobile | SizeNames.Tablet | SizeNames.Desktop  = SizeNames.Desktop

    if (size <= sizes.mobileMaxWidth) {
        sizeName =  SizeNames.Mobile
    }
    if (size >= sizes.tabletMinWidth && size <= sizes.tabletMaxWidth) {
        sizeName = SizeNames.Tablet
    }

    return ThemeNames[`${sizeName}${theme}`]
}

export const withTheme = (component: () => ReactNode) => () => {
    const {width} = useResizeWindow()
    const themeName: ThemeColorNames.Dark | ThemeColorNames.Light = ThemeColorNames.Dark
    const theme = themes[getThemeName(width, themeName)]

    return <ThemeProvider theme={theme}>
        {component()}
    </ThemeProvider>
}

export default withTheme