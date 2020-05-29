import axios from 'axios'

export default class Service {
    baseURL() {
        return "http://localhost:8080/api"
    }
    baseBagaceiraURL() {
        return "http://localhost:3001/users"
    }
    apiDragonURL() {
        return "http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon"
    }

    registraUsuario(request) {
        console.log(request);
        return axios.post(`${this.baseBagaceiraURL()}`, 
            { 
                name: request.name,
                email: request.email,
                password: request.password
            });
    }

    login({ login, senha }) {
        return axios.post(`${this.baseURL()}/usuario/login`,
            { login, senha });
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
        return axios.put(`${this.apiDragonURL()}/` + this.state.id,
            {
                name: request.name,
                type: request.type
            });
    }

    deleteDragon(id) {
        return axios.delete(`${this.apiDragonURL()}/` + id);
    }

    getLoginBagaceiro(email,senha) {
        return axios.get(`${this.baseBagaceiraURL()}?email=` + email + '&password=' + senha);
    }
}