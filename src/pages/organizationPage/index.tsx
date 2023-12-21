import React, {useCallback, useState} from 'react';
import styled from "styled-components";
import {otherFontsSM, tabletSpace} from "../../app/theme/variables";
import {textLargeSemiBoldStyles, textMediumMediumStyles} from "../../shared/styles/Text";
import Table from "../../widgets/table/Table";
import {ReactComponent as SearchIcon} from './../../shared/icons/search.svg'
import {ReactComponent as PrevIcon} from './../../shared/icons/arrowLeft.svg'
import {ReactComponent as NextIcon} from './../../shared/icons/arrowRight.svg'
import ReactPaginate from "react-paginate";
import {IQuery, useGetUsersQuery} from "../../shared/api";

const OrganizationPage = () => {
    const [{page, orderBy, search}, setQuery] = useState<IQuery>({page: 1, orderBy: undefined, search: undefined})
    const {data} = useGetUsersQuery({page, orderBy, search})

    const changeOrder = () => {
        setQuery(prevState => ({...prevState, orderBy: prevState.orderBy !== 'asc' ? 'asc' : 'desc'}))
    }

    const changeSearch = () => {

    }

    const changePage = useCallback((item: { selected: number }) => {
        if (page !== item.selected + 1) {
            setQuery(prevState => ({...prevState, page: item.selected + 1}))
        }
    }, [page])

    return (
        <OrganizationPageWrapper>
            <PageTitle>
                Моя организация
            </PageTitle>
            <PageContent>
                <PageDescription>
                    Пользователи
                </PageDescription>
                <InputContainer>
                    <SearchIcon/>
                    <StyledInput type={'search'} placeholder={'Поиск'}/>
                </InputContainer>
                {data && <Table data={data?.data} orderBy={orderBy} onClick={changeOrder}/>}
                <StyledPaginate
                    pageCount={data?.pages ? data.pages : 1}
                    previousLabel={<PrevIcon/>}
                    nextLabel={<NextIcon/>}
                    onPageChange={changePage}
                />
            </PageContent>
        </OrganizationPageWrapper>
    );
};

const OrganizationPageWrapper = styled.main`
  border-radius: ${tabletSpace.lvl2};
  background: ${p => p.theme.colors.gray4};
  display: flex;
  flex-direction: column;
`

const PageTitle = styled.div`
  ${textLargeSemiBoldStyles};
  padding: 34px;
  border-bottom: 1px solid ${p => p.theme.colors.gray3};
`

const PageDescription = styled.span`
  ${textLargeSemiBoldStyles};
  margin-bottom: 24px;
`

const InputContainer = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 16px;
    left: 16px;
  }
`

const StyledInput = styled.input`
  ${otherFontsSM.input};
  width: 100%;
  background: none;
  margin-bottom: 24px;
  padding: 16px 14px 16px 42px;
  outline: none;
  color: ${p => p.theme.colors.baseWhite};
  border-radius: ${p => p.theme.variables.constLvl1};
  border: 1px solid ${p => p.theme.colors.gray2};
  background: ${p => p.theme.colors.gray4};
  transition: all .2s;

  &::placeholder {
    color: ${p => p.theme.colors.gray1};
  }

  &:hover {
    border: 1px solid ${p => p.theme.colors.primary};
  }

  &:active, &:focus {
    border: 1px solid ${p => p.theme.colors.primary};
    background: ${p => p.theme.colors.gray2};
  }

`

const PageContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`

const StyledPaginate = styled(ReactPaginate)`
  display: flex;
  gap: 4px;
  list-style: none;
  justify-content: center;
  align-items: center;

  li {
    a {
      ${textMediumMediumStyles};
      padding: 6px 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    &.previous, &.next {
      a {
        padding: 6px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        

        svg {
          width: ${p => p.theme.variables.constLvl2};
          height: ${p => p.theme.variables.constLvl2};
          fill: ${p => p.theme.colors.gray1};
        }
      }
    }


    &.selected {
      border-radius: 8px;
      background: ${p => p.theme.colors.primary};
      color: ${p => p.theme.colors.baseWhite};
    }
  }
`;

export default OrganizationPage;