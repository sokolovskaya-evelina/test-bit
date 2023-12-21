import {ElementType, FC, ReactNode} from 'react'
import styled from 'styled-components'

type LevelType = 1 | 2 | 3 | 4 | 5 | 6

type Props = {
  children: ReactNode
  level: LevelType
}

const Title: FC<Props> = ({ children, level }) => {
  const Component = components[level]

  return (
    <Component>
      {children}
    </Component>
  )
}

export const Title1 = styled.h1`
  font: ${p=>p.theme.variables.fontH1};
`
export const Title2 = styled.h2`
  font: ${p=>p.theme.variables.fontH2};
`

export const Title3 = styled.h3`
  font: ${p=>p.theme.variables.fontH3};
`

export const Title4 = styled.h4`
  font: ${p=>p.theme.variables.fontH4};
`

export const Title5 = styled.h5`
  font: ${p=>p.theme.variables.fontH5};
`

export const Title6 = styled.h6`
  font: ${p=>p.theme.variables.fontH6};
`

const components: Record<LevelType, ElementType> = {
  1: Title1,
  2: Title2,
  3: Title3,
  4: Title4,
  5: Title5,
  6: Title6,
}

export default Title
