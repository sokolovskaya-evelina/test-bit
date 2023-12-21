import {css} from "styled-components";

const basicExtraSmallStyles = css`font: ${p => p.theme.variables.bodyXSFont}`

export const textExtraSmallRegularStyles = css`
  ${basicExtraSmallStyles};
  font-weight: 500;
`

export const textExtraSmallMediumStyles = css`
  ${basicExtraSmallStyles};
  font-weight: 400;
`

export const textExtraSmallSemiBoldStyles = css`
  ${basicExtraSmallStyles};
`

const basicSmallStyles = css`font: ${p => p.theme.variables.bodySFont}`

export const textSmallRegularStyles = css`
  ${basicSmallStyles};
  font-weight: 500;
`

export const textSmallMediumStyles = css`
  ${basicSmallStyles};
  font-weight: 400;
`

export const textSmallSemiBoldStyles = css`
  ${basicSmallStyles};
`

const basicMediumStyles = css`font: ${p => p.theme.variables.bodyMFont}`

export const textMediumRegularStyles = css`
  ${basicMediumStyles};
  font-weight: 500;
`

export const textMediumMediumStyles = css`
  ${basicMediumStyles};
  font-weight: 400;
`

export const textMediumSemiBoldStyles = css`
  ${basicMediumStyles};
`

const basicLargeStyles = css`font: ${p => p.theme.variables.bodyXLFont}`

export const textLargeRegularStyles = css`
  ${basicLargeStyles};
  font-weight: 500;
`

export const textLargeMediumStyles = css`
  ${basicLargeStyles};
  font-weight: 400;
`

export const textLargeSemiBoldStyles = css`
  ${basicLargeStyles};
`

const basicExtraLargeStyles = css`font: ${p => p.theme.variables.bodyXLFont}`

export const textExtraLargeRegularStyles = css`
  ${basicExtraLargeStyles};
  font-weight: 500;
`

export const textExtraLargeMediumStyles = css`
  ${basicExtraLargeStyles};
  font-weight: 400;
`

export const textExtraLargeSemiBoldStyles = css`
  ${basicExtraLargeStyles};
`