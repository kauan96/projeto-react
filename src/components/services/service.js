import axios from 'axios'

export default class Service {
    baseURL() {
        return "http://localhost:3001/users"
    }
    apiDragonURL() {
        return "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
    }

    registraUsuario(request) {
        return axios.post(`${this.baseURL()}`, 
            { 
                name: request.name,
                email: request.email,
                password: request.password
            });
    }

    login(email,senha) {
        return axios.get(`${this.baseURL()}?email=` + email + '&password=' + senha);
    }

    getListDragon() {
        return axios.get(`${this.apiDragonURL()}`);
    }

    registerDragon(request) {
        return axios.post(`${this.apiDragonURL()}`, 
            {
                name: request.name,
                type: request.type
            });
    }

    editDragon(request) {
        console.log(request);
        return axios.put(`${this.apiDragonURL()}/` + request.id,
            {
                name: request.name,
                type: request.type
            });
    }

    deleteDragon(id) {
        return axios.delete(`${this.apiDragonURL()}/` + id);
    }    
}