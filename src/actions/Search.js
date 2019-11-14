import * as searchTypes from '../constants/Search';

export const onFocusForm = () => {
  return {
    type: searchTypes.ON_FOCUS_FORM
  }
};

export const onLeaveForm = () => {
  return {
    type: searchTypes.ON_LEAVE_FORM
  }
};