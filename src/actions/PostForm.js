import * as postFormTypes from '../constants/PostForm';

export const onEnterValue = value => {
  return {
    type: postFormTypes.ON_ENTER_VALUE,
    payload: {
      value
    }
  }
};