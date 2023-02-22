import axios from "axios";

const API_URL = "/api/goals";

const setGoal = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const updateGoal = async (goalId) => {
  const response = await axios.put(`${API_URL}/${goalId}`);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const getGoal = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

const deleteGoal = async (goalId) => {
  const response = await axios.delete(`${API_URL}/${goalId}`);
  return response.data;
};

const goalService = {
  setGoal,
  updateGoal,
  getGoal,
  deleteGoal,
};

export default goalService;
