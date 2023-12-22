import React, {FC} from 'react';
import styled from "styled-components";
import {ReactComponent as InfoIcon} from "./../../icons/info.svg";
import {ReactComponent as ErrorIcon} from "./../../icons/error.svg";
import {ReactComponent as WarningIcon} from "./../../icons/warning.svg";
import {ReactComponent as SuccessIcon} from "./../../icons/success.svg";
import {ReactComponent as CloseIcon} from "./../../icons/close.svg";
import {mobileSpace} from "../../../app/theme/variables";
import Text from "../typography/Text";
import {textMediumRegularStyles} from "../../styles/Text";

type StatusType = 'info' | 'success' | 'error' | 'warning'

type Props = {
    description?: string
    status?: StatusType
    onClose: () => void
}

const Notification: FC<Props> = ({status = 'info', description, onClose}) => {

    const getIcon = () => {
        if (status === 'warning') {
            return <WarningIcon/>
        } else if (status === 'error') {
            return <ErrorIcon/>
        } else if (status === 'success') {
            return <SuccessIcon/>
        }
        return <InfoIcon/>
    }

    const getTitle = () => {
       if (status === 'warning') {
            return 'Предупреждающее уведомление'
        } else if (status === 'error') {
            return 'Уведомление об ошибке'
        } else if (status === 'success') {
            return 'Уведомление об успехе'
        }
        return 'Системное уведомление'
    }

    return (
        <NotificationWrapper $withDescription={!!description} $status={status}>
            <IconContainer>{getIcon()}</IconContainer>
            <div>
                <Text size={'m'} variant={'semiBold'}>{getTitle()}</Text>
                {description && <Description>{description}</Description>}
            </div>
            <CloseIcon onClick={onClose}/>
        </NotificationWrapper>
    );
};

const NotificationWrapper = styled.div<{ $status: StatusType, $withDescription?: boolean }>`
  position: absolute;
  z-index: 100;
  width: 100%;
  max-width: 412px;
  top: 20px;
  left: 20px;
  border-radius: 14px;
  padding: ${p => p.theme.variables.lvl2};
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: ${p => p.$withDescription ? 'flex-start' : 'center'};
  gap: ${mobileSpace.lvl1};
  border: 1px solid ${p => {
    if (p.$status === 'info') {
      return p.theme.colors.primary
    } else if (p.$status === 'warning') {
      return p.theme.colors.orange
    } else if (p.$status === 'error') {
      return p.theme.colors.critic
    } else {
      return p.theme.colors.green
    }
  }};
  background: ${p => p.theme.colors.gray2};
  
  ${p => p.theme.mediaQueries.mobile} {
    max-width: 300px;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  background: ${p => p.theme.colors.gray3};
  border-radius: 4px;
`

const Description = styled.div`
  ${textMediumRegularStyles};
  color: ${p => p.theme.colors.gray6};
  margin-top: ${mobileSpace.lvl1};
`

export default Notification;