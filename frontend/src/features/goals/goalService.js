import axios from "axios";

const API_URL = "/api/goals/";

//Create new goal

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  // const response = await fetch(API_URL, {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //   },
  //   body: { goalData }, // body data type must match "Content-Type" header
  // });

  // const data = await response.json();
  const response = await axios.post(API_URL, goalData, config);

  return response.data;
};

const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);

  return response.data;
};

const deleteGoal = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(`${API_URL}${id}`, config);

  return response.data;
};

const updateGoal = async (id, goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(`${API_URL}${id}`, goalData, config);
  return response.data;
};

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
  updateGoal,
};

export default goalService;
