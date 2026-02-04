import axios from "axios";

// Instancia Axios con baseURL
const api = axios.create({
  baseURL: "http://localhost:8081/matricula/api/v1.0"
});

// Interceptor para enviar el JWT
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ======== PETICIONES ========

const consultar = () => {
  return api.get('/estudiantes').then(r => r.data);
};

const consultarPorId = (id) => {
  return api.get(`/estudiantes/${id}`).then(r => r.data);
};

const guardar = (body) => {
  return api.post('/estudiantes', body).then(r => r.data);
};

const actualizar = (id, body) => {
  return api.put(`/estudiantes/${id}`, body).then(r => r.data);
};

const actualizarParcial = (id, body) => {
  return api.patch(`/estudiantes/${id}`, body).then(r => r.data);
};

const eliminar = (id) => {
  return api.delete(`/estudiantes/${id}`).then(r => r.data);
};

// ======== FACHADAS ========

export const consultarFacade = async () => await consultar();
export const consultarPorIdFacade = async (id) => await consultarPorId(id);
export const guardarFacade = async (body) => await guardar(body);
export const actualizarFacade = async (id, body) => await actualizar(id, body);
export const actualizarParcialFacade = async (id, body) => await actualizarParcial(id, body);
export const eliminarFacade = async (id) => await eliminar(id);
