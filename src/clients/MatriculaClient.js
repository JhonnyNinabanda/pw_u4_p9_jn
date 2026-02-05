import axios from "axios";

/* ===========================
   CONFIGURACIÓN BASE
=========================== */

const API_URL = "http://localhost:8082";

/* ===========================
   AXIOS CON TOKEN
=========================== */

const AuthClient = axios.create({
  baseURL: API_URL
});

AuthClient.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

/* ===========================
   LOGIN
=========================== */

export const loginFacade = async (credentials) => {
  const res = await axios.post(`${API_URL}/auth/login`, credentials);
  localStorage.setItem("token", res.data.accessToken);
  return res.data;
};

/* ===========================
   ESTUDIANTES
=========================== */

export const consultarFacade = async () => {
  const res = await AuthClient.get("/estudiantes");
  return res.data;
};

export const consultaPorIdFacade = async (id) => {
  const res = await AuthClient.get(`/estudiantes/${id}`);
  return res.data;
};

export const guardarFacade = async (body) => {
  const res = await AuthClient.post("/estudiantes", body);
  return res.data;
};

export const actualizarFacade = async (id, body) => {
  const res = await AuthClient.put(`/estudiantes/${id}`, body);
  return res.data;
};

export const actualizacionParcialFacade = async (id, body) => {
  const res = await AuthClient.patch(`/estudiantes/${id}`, body);
  return res.data;
};

export const eliminarFacade = async (id) => {
  const res = await AuthClient.delete(`/estudiantes/${id}`);
  return res.data;
};
