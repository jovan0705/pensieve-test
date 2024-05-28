import {
  SET_DEVICE_LIST,
  SET_DEVICE_LIST_ERROR,
  SET_DEVICE_LIST_LOADING,
  SET_DEVICE_DETAIL,
  SET_DEVICE_DETAIL_ERROR,
  SET_DEVICE_DETAIL_LOADING,
} from "../actionTypes";

const initialState = {
  deviceList: [],
  deviceListLoading: false,
  deviceListError: null,
  deviceDetail: [],
  deviceDetailLoading: false,
  deviceDetailError: null,
};

const gpsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_DEVICE_DETAIL:
      return {
        ...state,
        deviceDetail: payload,
      };
    case SET_DEVICE_DETAIL_ERROR:
      return {
        ...state,
        deviceDetailError: payload,
      };
    case SET_DEVICE_DETAIL_LOADING: {
      return {
        ...state,
        deviceDetailLoading: payload,
      };
    }
    case SET_DEVICE_LIST:
      return {
        ...state,
        deviceList: payload,
      };
    case SET_DEVICE_LIST_ERROR:
      return {
        ...state,
        deviceListError: payload,
      };
    case SET_DEVICE_LIST_LOADING:
      return {
        ...state,
        deviceListLoading: payload,
      };
    default:
      return state;
  }
};

export default gpsReducer;
