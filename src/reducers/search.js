import * as searchTypes from '../constants/Search';

const initialState = {
  isShow: false
};

const search = (state = initialState, action) => {
  switch(action.type) {
    case searchTypes.ON_FOCUS_FORM: {
      return {
        isShow: true
      };
    }
    case searchTypes.ON_LEAVE_FORM: {
      return {
        isShow: false
      };
    }
    default:
      return state;
  }
}

export default search;