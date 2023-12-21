import React, {FC} from 'react';
import styled from "styled-components";
import {desktopSpace, mobileSpace} from "../../app/theme/variables";
import {textSmallMediumStyles} from "../../shared/styles/Text";
import {IUser} from "../../shared/api";
import {ReactComponent as EditIcon} from './../../shared/icons/edit.svg'
import {ReactComponent as TrashIcon} from './../../shared/icons/trash.svg'
import {ReactComponent as ArrowDown} from './../../shared/icons/arrowDown.svg'

type Props = {
    data: IUser[]
}

const Table: FC<Props> = ({data}) => {
    return (
        <TableWrapper>
            <StyledTable>
                <thead>
                <StyledTableHeaderRow>
                    <StyledTableRowItem>Email</StyledTableRowItem>
                    <StyledTableRowItem>Имя</StyledTableRowItem>
                    <StyledTableRowItem>Роль</StyledTableRowItem>
                    <StyledTableRowItem>Подписка</StyledTableRowItem>
                    <StyledTableRowItem>
                        <ActionsContainer>
                            <span>Токены</span>
                            <ArrowDown/>
                        </ActionsContainer>
                    </StyledTableRowItem>
                    <StyledTableRowItem>Действия</StyledTableRowItem>
                </StyledTableHeaderRow>
                </thead>
                {data.map((item) => {
                    return <StyledTableRow key={item.id}>
                        <StyledTableRowItem>{item.email}</StyledTableRowItem>
                        <StyledTableRowItem>{item.name}</StyledTableRowItem>
                        <StyledTableRowItem>{item.role}</StyledTableRowItem>
                        <StyledTableRowItem>{item.subscription.plan.type}</StyledTableRowItem>
                        <StyledTableRowItem>{item.subscription.tokens} TKN</StyledTableRowItem>
                        <StyledTableRowItem>
                            <ActionsContainer>
                                <EditIcon/>
                                <TrashIcon/>
                            </ActionsContainer>
                        </StyledTableRowItem>
                    </StyledTableRow>
                })}
            </StyledTable>
        </TableWrapper>

    );
};

const TableWrapper = styled.div`
  overflow: auto;
`

const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
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

const ActionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${mobileSpace.lvl1};
`

export default Table;