import * as types from './notificationTypes';

export const makeNotification = (notifications) => {
  return {
    type: types.INVOKE_NOTIFICATION,
    payload: { ...notifications },
  };
};
