import * as postFormTypes from '../constants/PostForm';

const inititalState = {
  isActive: false
}

const postForm = (state = inititalState, action) => {
  switch (action.type) {
    case postFormTypes.ON_ENTER_VALUE: {
      const { value } = action.payload;
      return value.length > 0 ?
      {
        isActive: true
      }
      :
      {
        isActive: false
      }
    }
    default:
      return state;
  }
}

export default postForm;