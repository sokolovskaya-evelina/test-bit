import React, {FC, useEffect, useState} from 'react';
import styled from "styled-components";
import {mobileSpace} from "../../app/theme/variables";
import {IUser, OrderType, userApi} from "../../shared/api";
import {ReactComponent as EditIcon} from './../../shared/icons/edit.svg'
import {ReactComponent as TrashIcon} from './../../shared/icons/trash.svg'
import {ReactComponent as ArrowDown} from './../../shared/icons/arrowDown.svg'
import EmptyMessageText from "../../shared/ui/notification/EmptyMessageText";
import Drawer from "../../shared/ui/drawer/Drawer";
import TableHeader from "./ui/TableHeader";
import {table, tableContainer, tableRow, tableRowItem} from "../../shared/styles/Table";
import {IColumn} from "../../shared/types/table";

type Props = {
    data: IUser[]
    onClick: () => void
    orderBy: OrderType | undefined
}


const Table: FC<Props> = ({data, onClick, orderBy}) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [getUserTransactions, {data: transactionsData}] = userApi.useGetUserTransactionsMutation()

    const columns: Array<IColumn> = [
        {title: 'Email'},
        {title: 'Имя'},
        {title: 'Роль'},
        {title: 'Подписка'},
        {
            title: 'Токены',
            children: <ActionsContainer $orderBy={orderBy} onClick={onClick}>
                <span>Токены</span>
                <ArrowDown/>
            </ActionsContainer>
        },
        {title: 'Действия'}
    ]

    const onOpenDrawer = async (id: string) => {
        setDrawerIsOpen(true)
        await getUserTransactions({id})
        setUserEmail(getUserEmail(id))
    }

    const onCloseDrawer = () => {
        setDrawerIsOpen(false)
    }

    useEffect(() => {
        if (typeof window != 'undefined' && window.document) {
            drawerIsOpen ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset';
        }
    }, [drawerIsOpen])

    const getUserEmail = (id: string) => {
        return data.find(user => user.id === id)?.email || ''
    }

    return (
        <TableWrapper>
            <StyledTable>
                <TableHeader columns={columns}/>
                <tbody>
                {data.length >= 1 ? data.map((user: IUser) => (<StyledTableRow key={user.id}>
                        <StyledTableRowItem>{user.email}</StyledTableRowItem>
                        <StyledTableRowItem>{user.name}</StyledTableRowItem>
                        <StyledTableRowItem>{user.role}</StyledTableRowItem>
                        <StyledTableRowItem>{user.subscription.plan.type}</StyledTableRowItem>
                        <StyledTableRowItem>{user.subscription.tokens} TKN</StyledTableRowItem>
                        <StyledTableRowItem>
                            <ActionsContainer>
                                <EditIcon onClick={() => onOpenDrawer(user.id)}/>
                                <TrashIcon/>
                            </ActionsContainer>
                        </StyledTableRowItem>
                    </StyledTableRow>)
                ) : <StyledTableRow>
                    <StyledTableRowItem colSpan={6}>
                        <EmptyMessageText>Пользователи не найдены</EmptyMessageText>
                    </StyledTableRowItem>
                </StyledTableRow>}
                </tbody>
            </StyledTable>
            <Drawer data={transactionsData || []} isOpen={drawerIsOpen} onClose={onCloseDrawer} email={userEmail}/>
        </TableWrapper>
    );
};

const TableWrapper = styled.div`
  ${tableContainer}
`

const StyledTable = styled.table`
  ${table}
`

const StyledTableRow = styled.tr`
  ${tableRow}
`

const StyledTableRowItem = styled.td`
  ${tableRowItem}
`

const ActionsContainer = styled.div<{ $orderBy?: OrderType }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${mobileSpace.lvl1};

  svg {
    transition: .2s;
    rotate: ${p => p.$orderBy === 'asc' ? '180deg' : '0deg'};
    fill: ${p => !!p.$orderBy ? p.theme.colors.primary : p.theme.colors.gray1};
    cursor: pointer;
  }
`

export default Table;