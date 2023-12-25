import React, {FC} from 'react';
import styled from "styled-components";
import {tableRowItem} from "../../../shared/styles/Table";

type Props = {
    columns: Array<any>
}

const TableHeader: FC<Props> = ({columns}) => {
    return (
        <thead>
            <StyledTableHeaderRow>
                {columns.map((column) => <StyledTableRowItem
                    key={column.title}>{column?.children ? column.children : column.title}</StyledTableRowItem>)}
            </StyledTableHeaderRow>
        </thead>
    );
};

const StyledTableHeaderRow = styled.tr`
  text-align: center;
  border-radius: ${p => p.theme.variables.constLvl1};
  background: ${p => p.theme.colors.baseBlack};
  color: ${p => p.theme.colors.gray6};
`

const StyledTableRowItem = styled.td`
  ${tableRowItem}
`

export default TableHeader;