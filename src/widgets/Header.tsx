import React from 'react';
import styled from "styled-components";
import {ReactComponent as OrganizationIcon} from './../shared/icons/organization.svg'
import {ReactComponent as UserAvatar} from './../shared/icons/userAvatar.svg'
import {mediaQueries} from "../app/theme/mediaQueries";
import IconButton from "../shared/ui/buttons/IconButton";
import {mobileSpace} from "../app/theme/variables";
import Text from "../shared/ui/typography/Text";
import {textExtraLargeSemiBoldStyles} from "../shared/styles/Text";

const Header = () => {
    return (
        <HeaderWrapper>
            <Logo>BitTest</Logo>
            <TabWrapper>
                <IconButton>
                    <OrganizationIcon/>
                </IconButton>
                <Text variant={'medium'}>
                    Моя организация
                </Text>
            </TabWrapper>
            <UserInfoWrapper>
                <UserAvatar/>
                <UserInfo>
                    <Text size={"xs"} variant={'regular'}>
                        Вы авторизованы
                    </Text>
                    <Text size={'xs'} variant={'semiBold'}>
                        Администратор
                    </Text>
                </UserInfo>
            </UserInfoWrapper>
        </HeaderWrapper>
    );
};

const HeaderWrapper = styled.header`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 34px;
  border-radius: 17px;
  background: ${p => p.theme.colors.gray4};
  margin-bottom: ${p => p.theme.variables.lvl3};

  ${p => p.theme.mediaQueries.desktop} {
    padding: ${p => p.theme.variables.lvl1};
  }

  ${p => p.theme.mediaQueries.tablet} {
    padding: ${p => p.theme.variables.lvl1} ${p => p.theme.variables.lvl2};
    margin-bottom: 32px;
  }

  ${p => p.theme.mediaQueries.mobile} {
    padding: ${p => p.theme.variables.lvl1} 16px;
    display: flex;
    justify-content: space-between;
    margin: 0 16px 27px;
  }
`

const Logo = styled.h1`
  ${textExtraLargeSemiBoldStyles};
  padding-right: 26px;
`

const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${mobileSpace.lvl1};
`

const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  padding: ${p => p.theme.variables.constLvl1} 14px;

  border-radius: 6px;
  border: 1px solid ${p => p.theme.colors.gray3};
  background: ${p => p.theme.colors.gray4};
  
  ${mediaQueries.mobile} {
    display: none;
  }
`

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export default Header;