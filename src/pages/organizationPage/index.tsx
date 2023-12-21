import React from 'react';
import styled from "styled-components";
import {otherFontsSM, tabletSpace} from "../../app/theme/variables";
import {textLargeSemiBoldStyles} from "../../shared/styles/Text";
import Table from "../../widgets/table/Table";
import {ReactComponent as SearchIcon} from './../../shared/icons/search.svg'
import {useGetUsersQuery} from "../../shared/api";

const OrganizationPage = () => {
    const {data} = useGetUsersQuery({})

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
                {data ? <Table data={data?.data}/> : <></>}
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

export default OrganizationPage;