import { baseUrl } from "../../api/baseUrl";
import {
  SET_DEVICE_LIST,
  SET_DEVICE_LIST_ERROR,
  SET_DEVICE_LIST_LOADING,
  SET_DEVICE_DETAIL,
  SET_DEVICE_DETAIL_ERROR,
  SET_DEVICE_DETAIL_LOADING,
} from "../actionTypes";
import { errorAlert } from "../../helpers/alerts";

const setDeviceList = (payload) => {
  return { type: SET_DEVICE_LIST, payload };
};

const setDeviceListError = (payload) => {
  return { type: SET_DEVICE_LIST_ERROR, payload };
};

const setDeviceListLoading = (payload) => {
  return { type: SET_DEVICE_LIST_LOADING, payload };
};

const setDeviceDetail = (payload) => {
  return { type: SET_DEVICE_DETAIL, payload };
};

const setDeviceDetailError = (payload) => {
  return { type: SET_DEVICE_DETAIL_ERROR, payload };
};

const setDeviceDetailLoading = (payload) => {
  return { type: SET_DEVICE_DETAIL_LOADING, payload };
};

export const getDeviceList = () => {
  return async (dispatch) => {
    dispatch(setDeviceListLoading(true));
    dispatch(setDeviceListError(null));
    try {
      const deviceList = await baseUrl.get(`/gps`);
      dispatch(setDeviceList(deviceList.data));
      return deviceList.data;
    } catch (error) {
      dispatch(setDeviceListError(error));
      errorAlert(error.response.data.message);
    } finally {
      dispatch(setDeviceListLoading(false));
    }
  };
};

export const getDeviceDetail = (id) => {
  return async (dispatch, getState) => {
    dispatch(setDeviceDetailLoading(true));
    dispatch(setDeviceDetailError(null));
    try {
      const deviceDetail = await baseUrl.get(`/gps/${id}`);
      dispatch(setDeviceDetail(deviceDetail.data));
      return deviceDetail.data;
    } catch (error) {
      dispatch(setDeviceDetailError(error));
      errorAlert(error.response.data.message);
    } finally {
      dispatch(setDeviceDetailLoading(false));
    }
  };
};
