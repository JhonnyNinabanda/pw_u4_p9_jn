import axios from "axios";

//Base para todos los endpoints
const http = axios.create({
    baseURL: 'http://localhost8081/matricula/api/v1.0'
});

// Config para Authorization el token
http.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default http;