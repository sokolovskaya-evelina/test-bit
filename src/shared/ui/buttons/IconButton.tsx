import React, {FC, ReactNode} from 'react';
import styled from "styled-components";

type Props = {
    children: ReactNode
}

const IconButton: FC<Props> = ({children}) => {
    return (
        <IconButtonWrapper>
            {children}
        </IconButtonWrapper>
    );
};

const IconButtonWrapper = styled.div`
  width: 24px;
  height: 24px;
  
  display: flex;
  justify-content: center;
  align-items: center;


  border-radius: 4px;
  background: ${p => p.theme.colors.gray3};
`

export default IconButton;