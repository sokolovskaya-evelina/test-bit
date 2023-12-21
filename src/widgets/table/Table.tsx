import React from 'react';
import styled from "styled-components";
import {desktopSpace} from "../../app/theme/variables";
import {textSmallMediumStyles} from "../../shared/styles/Text";

const Table = () => {
    return (
        <StyledTable>
            <StyledTableHeaderRow>
                <StyledTableRowItem>Email</StyledTableRowItem>
                <StyledTableRowItem>Имя</StyledTableRowItem>
                <StyledTableRowItem>Роль</StyledTableRowItem>
                <StyledTableRowItem>Подписка</StyledTableRowItem>
                <StyledTableRowItem>Токены</StyledTableRowItem>
                <StyledTableRowItem>Действия</StyledTableRowItem>
            </StyledTableHeaderRow>
            <StyledTableRow>
                <StyledTableRowItem>34,5</StyledTableRowItem>
                <StyledTableRowItem>3,5</StyledTableRowItem>
                <StyledTableRowItem>36</StyledTableRowItem>
                <StyledTableRowItem>23</StyledTableRowItem>
                <StyledTableRowItem>23</StyledTableRowItem>
                <StyledTableRowItem>23</StyledTableRowItem>
            </StyledTableRow>
            <StyledTableRow>
                <StyledTableRowItem>35,5</StyledTableRowItem>
                <StyledTableRowItem>4</StyledTableRowItem>
                <StyledTableRowItem>36⅔</StyledTableRowItem>
                <StyledTableRowItem>36⅔</StyledTableRowItem>
                <StyledTableRowItem>36⅔</StyledTableRowItem>
                <StyledTableRowItem>23–23,5</StyledTableRowItem>
            </StyledTableRow>
        </StyledTable>
    );
};

const StyledTable = styled.table`
border-collapse: collapse;
`

const StyledTableHeaderRow = styled.tr`
  text-align: center;
  border-radius: ${p => p.theme.variables.constLvl1};
  background: ${p => p.theme.colors.baseBlack};
  color: ${p => p.theme.colors.gray6};
`

const StyledTableRowItem = styled.td`
  ${textSmallMediumStyles};
  padding: 14px ${desktopSpace.lvl2};
`

const StyledTableRow = styled.tr`
  text-align: center;
  border-bottom: 1px solid ${p => p.theme.colors.gray3};
`

export default Table;