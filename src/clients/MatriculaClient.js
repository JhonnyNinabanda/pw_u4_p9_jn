import axios from "axios";

const consultar = () => {
    const data = axios.get('http://localhost:8080/matricula/api/v1.0/estudiantes').then(r => r.data);
    return data;
}