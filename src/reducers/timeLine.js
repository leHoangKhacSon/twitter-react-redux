import * as timeLineTypes from '../constants/TimeLine';

const inititalState = [];

const timeLine = (state = inititalState, action) => {
  switch (action.type) {
    case timeLineTypes.FETCH_DATA_TIME_LINE: {
      return [
        ...state
      ];
    }
    case timeLineTypes.FETCH_DATA_TIME_LINE_SUCCESS: {
      const { data } = action.payload;
      return [
        ...state,
        ...data
      ];
    }
    case timeLineTypes.FETCH_DATA_TIME_LINE_FAIL: {
      return [];
    }
    case timeLineTypes.ON_LIKE_CLICK: {
      const { item } = action.payload;
      const indexLike = state.indexOf(item);
      return [
        ...state.slice(0, indexLike),
        {
          ...item,
          isLike: !item.isLike
        },
        ...state.slice(indexLike + 1)
      ]
    }
    case timeLineTypes.SHOW_INFO_CARD: {
      const { item } = action.payload;
      const indexShow = state.indexOf(item);
      console.log(state);
      return [
        ...state.slice(0, indexShow),
        {
          ...item,
          infoCardShow: true
        },
        ...state.slice(indexShow + 1)
      ]
    }
    case timeLineTypes.HIDE_INFO_CARD: {
      const { item } = action.payload;
      const indexHide = state.indexOf(item);
      return [
        ...state.slice(0, indexHide),
        {
          ...item,
          infoCardShow: false
        },
        ...state.slice(indexHide + 1)
      ]
    }
    default:
      return state;
  }
}

export default timeLine;