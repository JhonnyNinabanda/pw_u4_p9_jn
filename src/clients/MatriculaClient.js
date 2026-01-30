import axios from "axios";

const consultar = () => {
    const data = axios.get('http://localhost:8081/matricula/api/v1.0/estudiantes').then(r => r.data);
    return data;
}

const consultarPorId = (id) => {
    const data = axios.get(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);
    return data;
}

const guardar = async (body) => {
    const data = await axios.post('http://localhost:8081/matricula/api/v1.0/estudiantes', body).then(r => r.data);
    console.log(data);
    return data;
}

const actualizar = async (id, body) => {
    const data = await axios.put(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body).then(r => r.data);
    console.log(data);
    return data;
}

const actualizarParcial = async (id, body) => {
    const data = await axios.patch(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`, body).then(r => r.data);
    console.log(data);
    return data;
}

const eliminar = async (id) => {
    const data = await axios.delete(`http://localhost:8081/matricula/api/v1.0/estudiantes/${id}`).then(r => r.data);
    console.log(data);
    return data;
}

// FACADE 

export const consultarFacade = async() => {
    return await consultar();
}

export const consultarPorIdFacade = async(id) => {
    return await consultarPorId(id);
}

export const guardarFacade = async(body) => {
    return await guardar(body);
}

export const actualizarFacade = async(id, body) => {
    return await actualizar(id, body);
}

export const actualizarParcialFacade = async(id, body) => {
    return await actualizarParcial(id, body);
}

export const eliminarFacade = async(id) => {
    return await eliminar(id);
}

