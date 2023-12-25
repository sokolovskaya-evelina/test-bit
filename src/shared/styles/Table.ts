import {css} from "styled-components";
import {textSmallMediumStyles} from "./Text";
import {desktopSpace} from "../../app/theme/variables";

export const tableContainer = css`
  overflow: auto;
  margin-bottom: 24px;
`

export const table = css`
  border-collapse: collapse;
  width: 100%;
`

export const tableRow = css`
  text-align: center;
  border-bottom: 1px solid ${p => p.theme.colors.gray3};
`

export const tableRowItem = css`
  ${textSmallMediumStyles};
  padding: 14px ${desktopSpace.lvl2};
`