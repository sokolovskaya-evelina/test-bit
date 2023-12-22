import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {textMediumRegularStyles} from "../../styles/Text";

type Props = {
    children: ReactNode
}

const EmptyMessageText: FC<Props> = ({children}) => {
    return (
        <StyledEmptyMessageText>{children}</StyledEmptyMessageText>
    );
};

const StyledEmptyMessageText = styled.div`
  ${textMediumRegularStyles};
  text-align: center;
  font-style: italic;
`

export default EmptyMessageText;