import React, {FC} from 'react';
import styled from "styled-components";
import Text from "../typography/Text";
import {ReactComponent as CloseIcon} from './../../icons/close.svg'
import {textExtraLargeSemiBoldStyles} from "../../styles/Text";
import TableHeader from "../../../widgets/table/ui/TableHeader";
import {ITransaction} from "../../api";
import EmptyMessageText from "../notification/EmptyMessageText";
import {table, tableContainer, tableRow, tableRowItem} from "../../styles/Table";
import {IColumn} from "../../types/table";
import moment from "moment";

type Props = {
    isOpen: boolean
    onClose: () => void
    email: string
    data: Array<ITransaction>
}

const Drawer: FC<Props> = ({isOpen, onClose, email, data}) => {

    const columns: Array<IColumn> = [
        {title: 'Тип'},
        {title: 'Сумма'},
        {title: 'Дата'},
    ]

    return (
        <>
            <Overlay onClick={onClose} $isOpen={isOpen} aria-hidden="true"/>
            <StyledDrawer onClick={onClose} className={`${isOpen && 'animate'} ${!isOpen && 'hidden'}`} tabIndex={-1}
                          $isOpen={isOpen}>
                <DrawerHeader>
                    <Text variant={'semiBold'} size={'xl'} children={email}/>
                    <CloseIcon onClick={onClose}/>
                </DrawerHeader>
                <Description>Использование токенов</Description>
                <Description>История операций</Description>
                <TableWrapper>
                    <StyledTable>
                        <TableHeader columns={columns}/>
                        <tbody>
                        {data.length >= 1 ? data.map((data) => (<StyledTableRow key={data.id}>
                                <StyledTableRowItem>{data.type === 'REPLENISH' ? 'Пополнение' : 'Списание'}</StyledTableRowItem>
                                <StyledTableRowItem $isReplenish={data.type === 'REPLENISH'}>{`${data.type === 'REPLENISH' ? '+' : '-'}${data.amount} BTKN`}</StyledTableRowItem>
                                <StyledTableRowItem>
                                        <div>{`${moment(data.created_at).format('DD.MM.YY')},`}</div>
                                        <div>{`${moment(data.created_at).format('H:mm:ss')}`}</div>
                                </StyledTableRowItem>
                            </StyledTableRow>)
                        ) : <StyledTableRow>
                            <StyledTableRowItem colSpan={6}>
                                <EmptyMessageText>Данные не найдены</EmptyMessageText>
                            </StyledTableRowItem>
                        </StyledTableRow>}
                        </tbody>
                    </StyledTable>
                </TableWrapper>

            </StyledDrawer>
        </>
    );
};

const Overlay = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1);

  opacity: ${p => p.$isOpen ? 1 : 0};
  z-index: ${p => p.$isOpen ? 0 : -1};
  visibility: ${p => p.$isOpen ? 'visible' : 'hidden'};

  ${p => !p.$isOpen && 'transition: 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'}
`

const StyledDrawer = styled.div<{ $isOpen: boolean }>`
  top: 0;
  flex: 1 0 auto;
  height: 100%;
  display: flex;
  outline: 0;
  z-index: 100;
  position: fixed;
  overflow-y: auto;
  flex-direction: column;
  right: 0;
  left: auto;
  background-color: ${p => p.theme.colors.gray4};
  width: 470px;
  flex-shrink: 0;
  padding: 56px ${p => p.theme.variables.lvl3};

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
  transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &.hidden {
    visibility: hidden;
    width: 240px;
    transform: translateX(240px);
    flex-shrink: 0;
    transition: 325ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  }

  &.animate {
    visibility: visible;
    transform: none;
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
  
  ${p => p.theme.mediaQueries.mobile} {
    width: 100%;
  }
`

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
  }
`

const Description = styled.span`
  ${textExtraLargeSemiBoldStyles};
  margin: ${p => p.theme.variables.lvl2} 0;
`

const TableWrapper = styled.div`
 /*${tableContainer}*/
`

const StyledTable = styled.table`
  ${table}
`

const StyledTableRow = styled.tr`
  ${tableRow}
`

const StyledTableRowItem = styled.td<{ $isReplenish?: boolean }>`
  ${tableRowItem};
  color: ${p => {
      if (typeof p.$isReplenish === 'undefined') return p.theme.colors.baseWhite
      return p.$isReplenish ? p.theme.colors.green : p.theme.colors.critic
  }};
`

export default Drawer;