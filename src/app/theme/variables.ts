const mobileHeaderFont = {
    fontH1: '700 28px/36px "IBM Plex Sans", Helvetica, sans-serif',
    fontH2: '600 24px/32px "IBM Plex Sans", Helvetica, sans-serif',
    fontH3: '600 22px/30px "IBM Plex Sans", Helvetica, sans-serif',
    fontH4: '600 20px/26px "IBM Plex Sans", Helvetica, sans-serif',
    fontH5: '600 18px/24px "IBM Plex Sans", Helvetica, sans-serif',
    fontH6: '600 16px/22px "IBM Plex Sans", Helvetica, sans-serif',
}
const tabletHeaderFont = {
    fontH1: '700 40px/52px "IBM Plex Sans", Helvetica, sans-serif',
    fontH2: '600 30px/40px "IBM Plex Sans", Helvetica, sans-serif',
    fontH3: '600 26px/34px "IBM Plex Sans", Helvetica, sans-serif',
    fontH4: '600 22px/30px "IBM Plex Sans", Helvetica, sans-serif',
    fontH5: '600 20px/26px "IBM Plex Sans", Helvetica, sans-serif',
    fontH6: '600 18px/24px "IBM Plex Sans", Helvetica, sans-serif',
}
const desktopHeaderFont = {
    fontH1: '700 46px/60px "IBM Plex Sans", Helvetica, sans-serif',
    fontH2: '600 34px/44px "IBM Plex Sans", Helvetica, sans-serif',
    fontH3: '600 30px/40px "IBM Plex Sans", Helvetica, sans-serif',
    fontH4: '600 26px/34px "IBM Plex Sans", Helvetica, sans-serif',
    fontH5: '600 22px/30px "IBM Plex Sans", Helvetica, sans-serif',
    fontH6: '600 18px/24px "IBM Plex Sans", Helvetica, sans-serif',
}

const mobileBodyFont = {
    bodyXSFont: '600 10px/16px "IBM Plex Sans", Helvetica, sans-serif',
    bodySFont: '600 12px/16px "IBM Plex Sans", Helvetica, sans-serif',
    bodyMFont: '600 14px/18px "IBM Plex Sans", Helvetica, sans-serif',
    bodyXLFont: '600 18px/24px "IBM Plex Sans", Helvetica, sans-serif',
    bodyXXLFont: '600 20px/26px "IBM Plex Sans", Helvetica, sans-serif',
}
const tabletBodyFont = {
    bodyXSFont: '600 10px/16px "IBM Plex Sans", Helvetica, sans-serif',
    bodySFont: '600 12px/16px "IBM Plex Sans", Helvetica, sans-serif',
    bodyMFont: '600 14px/18px "IBM Plex Sans", Helvetica, sans-serif',
    bodyXLFont: '600 20px/26px "IBM Plex Sans", Helvetica, sans-serif',
    bodyXXLFont: '600 22px/30px "IBM Plex Sans", Helvetica, sans-serif',
}
const desktopBodyFont = {
    bodyXSFont: '600 12px/16px "IBM Plex Sans", Helvetica, sans-serif',
    bodySFont: '600 14px/18px "IBM Plex Sans", Helvetica, sans-serif',
    bodyMFont: '600 16px/22px "IBM Plex Sans", Helvetica, sans-serif',
    bodyXLFont: '600 22px/29px "IBM Plex Sans", Helvetica, sans-serif',
    bodyXXLFont: '600 26px/34px "IBM Plex Sans", Helvetica, sans-serif',
}

const otherFontsMD = {
    button: '500 18px/24px "IBM Plex Sans", Helvetica, sans-serif',
    input: '400 16px/22px "IBM Plex Sans", Helvetica, sans-serif',
}
export const otherFontsSM = {
    button: '500 15px/20px "IBM Plex Sans", Helvetica, sans-serif',
    input: '400 14px/18px "IBM Plex Sans", Helvetica, sans-serif',
}

const chatFont = {
    chatFontH1: '600 32px/42px "IBM Plex Sans", Helvetica, sans-serif',
    chatFontH2: '600 28px/36px "IBM Plex Sans", Helvetica, sans-serif',
    chatFontH3: '600 24px/32px "IBM Plex Sans", Helvetica, sans-serif',
    chatFontH4: '600 20px/26px "IBM Plex Sans", Helvetica, sans-serif',
    chatFontH5: '600 18px/24px "IBM Plex Sans", Helvetica, sans-serif',
    chatFontH6: '600 16px/22px "IBM Plex Sans", Helvetica, sans-serif',
}

const constSpace = {
    constLvl1: '8px',
    constLvl2: '12px',
    constLvl3: '14px',
    constLvl4: '16px',
}
export const desktopSpace = {
    lvl1: '16px',
    lvl2: '20px',
    lvl3: '34px',
    lvl4: '42px',
    lvl5: '52px',
    lvl6: '64px',
    lvl7: '72px',
    lvl8: '86px',
}
export const tabletSpace = {
    lvl1: '14px',
    lvl2: '18px',
    lvl3: '30px',
    lvl4: '38px',
    lvl5: '46px',
    lvl6: '56px',
    lvl7: '66px',
    lvl8: '74px',
}
export const mobileSpace = {
    lvl1: '10px',
    lvl2: '14px',
    lvl3: '24px',
    lvl4: '30px',
    lvl5: '38px',
    lvl6: '44px',
    lvl7: '56px',
    lvl8: '64px',
}

export const mobileVariables = {
    ...chatFont,
    ...mobileHeaderFont,
    ...mobileBodyFont,
    ...otherFontsSM,
    ...constSpace,
    ...mobileSpace
}
export const tabletVariables = {
    ...chatFont,
    ...tabletHeaderFont,
    ...tabletBodyFont,
    ...otherFontsMD,
    ...constSpace,
    ...tabletSpace
}
export const desktopVariables = {
    ...chatFont,
    ...desktopHeaderFont,
    ...desktopBodyFont,
    ...otherFontsMD,
    ...constSpace,
    ...desktopSpace
}

/*
* :root {


}

* */