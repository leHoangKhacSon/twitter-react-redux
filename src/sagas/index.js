import {
  fork,
  take,
  call,
  put
} from 'redux-saga/effects';
import axios from 'axios';

import * as trendingTypes from '../constants/Trending';
import * as followTypes from '../constants/WhoToFollow';
import * as timeLineTypes from '../constants/TimeLine';
import { fetchDataTrendingSuccess, fetchDataTrendingFail } from '../actions/Trending';
import { fetchDataFollowSuccess, fetchDataFollowFail } from '../actions/WhoToFollow';
import { fetchDataTimeLineSuccess, fetchDataTimeLineFail } from '../actions/TimeLine';
/**
 * B1: Thực thi action fetch data
 * B2: Gọi api
 * B3: Kiểm tra status code
 * Nếu thành công ...
 * Nếu thất bại ...
 * B4: Thực thi các công việc tiếp theo
 */ 
const fetchData = async url => {
  const res = await axios.get(url);
  return res;
}

function* watchFetchDataTrending() {
  while(true) {
    yield take(trendingTypes.FETCH_DATA_TRENDING);
    const res = yield call(() => fetchData('https://book-store-nodejs-react.herokuapp.com/api/trends'));
    const { status, data } = res;
    if(status === 200) {
      yield put(fetchDataTrendingSuccess(data));
    } else {
      yield put(fetchDataTrendingFail());
    }
  }
}

function* watchFetchDataFollow() {
  while(true) {
    yield take(followTypes.FETCH_DATA_FOLLOW);
    const res = yield call(() => fetchData('https://book-store-nodejs-react.herokuapp.com/api/follows'));
    const { status, data } = res;
    if(status === 200) {
      yield put(fetchDataFollowSuccess(data));
    } else {
      yield put(fetchDataFollowFail());
    }
  }
}

function* watchFetchDataTimeLine() {
  while(true) {
    yield take(timeLineTypes.FETCH_DATA_TIME_LINE);
    const res = yield call(() => fetchData('https://book-store-nodejs-react.herokuapp.com/api/posts'));
    const { status, data } = res;
    if(status === 200) {
      yield put(fetchDataTimeLineSuccess(data));
    } else {
      yield put(fetchDataTimeLineFail());
    }
  }
}

function* rootSaga() {
  yield fork(watchFetchDataTrending);
  yield fork(watchFetchDataFollow);
  yield fork(watchFetchDataTimeLine);
}

export default rootSaga;
