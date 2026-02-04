import axios from "axios";

const login = async (credentials) => {
  const response = await axios.post(
    "http://localhost:8082/auth/login",
    credentials
  );
  return response.data;
};

export const loginFacade = async (credentials) => {
  return await login(credentials);
};
