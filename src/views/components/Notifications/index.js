import React from 'react';
import PropTypes from 'prop-types';
import useAssets from '../../../assets';
import useControllers from '../../../controllers';
import _ from 'lodash';
// Styles
import {
  StyledNotificationHeaderContainer,
  StyledExternalContainer,
  StyledNotificationButtonContainer,
  StyledTypographyNotificationHub,
  StyledNotificationIconContainer,
  StyledContainerPopUp,
  StyledPopUpPromiseInProgressContainer,
  StyledPopUpPromiseInProgressInnerContainer,
  StyledCircularProgress,
  StyledPopUpArrow,
  StyledContainerInnerPopUpContainer,
  StyledNotificationRow,
  StyledNotificationDescription,
  StyledNotificationTime,
  StyledNotificationSeeAllContainer,
  StyledNotificationSeeAll,
  StyledContainerSidePopUp,
  StyledNotificationTittleContainer,
  StyledContainerInnerSideContainer,
  StyledNotificationTittle,
  StyledNotificationIconClose,
  StyledNoNotification,
  StyledNewNotificationMarkContainer,
} from './Notifications.styles';

const Notifications = (props) => {
  const { className } = props;

  const { useIcons } = useAssets();
  const {
    iconArrowUpMenu: IconArrowUpMenu,
    iconNotification: IconNotification,
    iconNewNotification: IconNewNotification,
    iconClose: IconClose,
  } = useIcons();

  const { useComponentHooks } = useControllers();
  const { useNotifications } = useComponentHooks();
  const {
    promiseGetLatestNotifications,
    promiseGetAllNotifications,

    popUpStatus,
    openPopUp,
    // profile,
    sideNotificationStatus,
    openSideNotifications,
    latestNotifications,
    handleNotificationTime,
    allNotifications,
    popUpNotificationRef,
    innerNotificationRef,
    newNotificationStatus,
    handleGetApplicationById,
  } = useNotifications();
  return (
    <>
      <StyledNotificationHeaderContainer
        ref={popUpNotificationRef}
        className={className}
      >
        <StyledNotificationButtonContainer onClick={openPopUp}>
          <StyledNotificationIconContainer>
            <StyledNewNotificationMarkContainer status={newNotificationStatus}>
              <IconNewNotification color={'#EDCC38'} />
            </StyledNewNotificationMarkContainer>
            <IconNotification size={0.7} styles={{ cursor: 'pointer' }} />
          </StyledNotificationIconContainer>
          <StyledTypographyNotificationHub>
            Notification Hub
          </StyledTypographyNotificationHub>
        </StyledNotificationButtonContainer>

        <StyledContainerPopUp status={popUpStatus}>
          <StyledPopUpArrow>
            <IconArrowUpMenu />
          </StyledPopUpArrow>
          <StyledContainerInnerPopUpContainer>
            {promiseGetLatestNotifications && (
              <StyledPopUpPromiseInProgressContainer>
                <StyledPopUpPromiseInProgressInnerContainer>
                  <StyledCircularProgress />
                </StyledPopUpPromiseInProgressInnerContainer>
              </StyledPopUpPromiseInProgressContainer>
            )}
            {latestNotifications?.length ? (
              _.map(latestNotifications, (notification, key) => {
                return (
                  <StyledNotificationRow
                    key={key}
                    onClick={() =>
                      notification.id
                        ? handleGetApplicationById({
                            id: notification.data.id,
                            type: notification.data.type,
                            applicationDate: notification.data.body.submitDate,
                          })
                        : () => {}
                    }
                  >
                    <StyledNotificationDescription>
                      {notification.data.title}
                    </StyledNotificationDescription>

                    <StyledNotificationTime>
                      {handleNotificationTime(notification.notificatedAt)}
                    </StyledNotificationTime>
                  </StyledNotificationRow>
                );
              })
            ) : (
              <StyledNotificationRow>
                <StyledNoNotification>No notifications</StyledNoNotification>
              </StyledNotificationRow>
            )}
          </StyledContainerInnerPopUpContainer>
          {latestNotifications?.length && (
            <StyledNotificationSeeAllContainer onClick={openSideNotifications}>
              <StyledNotificationSeeAll>See all</StyledNotificationSeeAll>
            </StyledNotificationSeeAllContainer>
          )}
        </StyledContainerPopUp>
      </StyledNotificationHeaderContainer>
      <StyledExternalContainer status={sideNotificationStatus}>
        <StyledContainerSidePopUp status={sideNotificationStatus}>
          {promiseGetAllNotifications && (
            <StyledPopUpPromiseInProgressContainer style={{ width: '320px' }}>
              <StyledPopUpPromiseInProgressInnerContainer>
                <StyledCircularProgress />
              </StyledPopUpPromiseInProgressInnerContainer>
            </StyledPopUpPromiseInProgressContainer>
          )}
          <StyledNotificationTittleContainer>
            <StyledNotificationTittle>Notifications</StyledNotificationTittle>
            <StyledNotificationIconClose onClick={openSideNotifications}>
              <IconClose size={0.5} color={'#6D7074'} />
            </StyledNotificationIconClose>
          </StyledNotificationTittleContainer>

          <StyledContainerInnerSideContainer ref={innerNotificationRef}>
            {allNotifications.length &&
              _.map(allNotifications, (notification, key) => {
                return (
                  <StyledNotificationRow
                    key={key}
                    onClick={() =>
                      notification.data.id
                        ? handleGetApplicationById({
                            id: notification.data.id,
                            type: notification.data.type,
                            applicationDate: notification.data.body.submitDate,
                          })
                        : () => {}
                    }
                  >
                    <StyledNotificationDescription>
                      {notification.data.title}
                    </StyledNotificationDescription>
                    <StyledNotificationTime>
                      {handleNotificationTime(notification.notificatedAt)}
                    </StyledNotificationTime>
                  </StyledNotificationRow>
                );
              })}
          </StyledContainerInnerSideContainer>
        </StyledContainerSidePopUp>
      </StyledExternalContainer>
    </>
  );
};

Notifications.propTypes = {
  className: PropTypes.string,
};

export default Notifications;
