import axios from "axios";

const API_URL = "/api/schedule/";

const getSchedule = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const postActivity = async (scheduleData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, scheduleData, config);
  return response.data;
};

const deleteActivity = async (key, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + key, config);

  return response.data;
};

const scheduleService = {
  getSchedule,
  postActivity,
  deleteActivity,
};

export default scheduleService;
