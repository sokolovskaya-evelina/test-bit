import {CSSProperties, DOMAttributes, FC, ReactNode} from 'react'
import styled, {css} from 'styled-components'
import {
  textExtraLargeMediumStyles,
  textExtraLargeRegularStyles,
  textExtraLargeSemiBoldStyles,
  textExtraSmallMediumStyles,
  textExtraSmallRegularStyles,
  textExtraSmallSemiBoldStyles,
  textLargeMediumStyles,
  textLargeRegularStyles,
  textLargeSemiBoldStyles,
  textMediumMediumStyles,
  textMediumRegularStyles,
  textMediumSemiBoldStyles,
  textSmallMediumStyles,
  textSmallRegularStyles,
  textSmallSemiBoldStyles
} from "../../styles/Text";

type VariantType = 'regular' | 'medium' | 'semiBold'
type SizeType = 'xs' | 's' | 'm' | 'xl' | 'xxl'

type Props = {
    children: ReactNode
    size?: SizeType
    style?: CSSProperties
    variant?: VariantType
} & DOMAttributes<HTMLElement>

export const Text: FC<Props> = ({children, size = 'm', style, variant = 'regular', ...props}) => {
    return (
        <StyledText $variant={variant} size={size} style={style} {...props}>
            {children}
        </StyledText>
    )
}

export const StyledText = styled.span<{ $variant: VariantType; size: SizeType }>`
  ${p => styles[p.size][p.$variant]};
`

const styles: Record<SizeType, Record<VariantType, ReturnType<typeof css>>> = {
  xs: {
    medium: textExtraSmallMediumStyles,
    regular: textExtraSmallRegularStyles,
    semiBold: textExtraSmallSemiBoldStyles
  },
  s: {
    medium: textSmallMediumStyles,
    regular: textSmallRegularStyles,
    semiBold: textSmallSemiBoldStyles
  },
  m: {
    medium: textMediumMediumStyles,
    regular: textMediumRegularStyles,
    semiBold: textMediumSemiBoldStyles
  },
  xl: {
    medium: textLargeMediumStyles,
    regular: textLargeRegularStyles,
    semiBold: textLargeSemiBoldStyles
  },
  xxl: {
    medium: textExtraLargeMediumStyles,
    regular: textExtraLargeRegularStyles,
    semiBold: textExtraLargeSemiBoldStyles
  }
}

export default Text
