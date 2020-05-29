import React, { Component } from 'react'
import axios from 'axios'
import { history } from '../../history'
import Menu from '../menu/Menu';
import './Register.scss';
import Service from '../services/service'

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            sucess: '',
            error: ''
        }
        this.service = new Service();
        this.changeName = this.changeName.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeName(event) {
        this.setState({ name: event.target.value })
    }

    changeEmail(event) {
        this.setState({ email: event.target.value })
    }

    changePassword(event) {
        this.setState({ password: event.target.value })
    }

    clear() {
        this.setState({ name: '', email: '', password: '', sucess: '', error: '' })
    }

    save = async e => {
        e.preventDefault();
        try {
            this.clear();
            const { name, email, password } = this.state;
            if (!name || !email || !password) {
                this.setState({ error: "Todos campos são obrigatórios." });
            } else {
                await this.service.registraUsuario({ name, email, password });
                this.clear();
                this.setState({sucess: "Usuário cadastrado, com sucesso!"});
            }
        } catch {
            this.setState({
                error: "Houve um problema com o cadastro, por favor tente mais tarde."
            });
        }            
    }

    render() {
        return (
            <div className="Register">
                <form onSubmit={this.save}>
                    <h2>Cadastro de Usuário</h2>
                    { this.state.error && <p className="message-error">{ this.state.error }</p> }
                    { this.state.sucess && <p className="message-sucess">{ this.state.sucess }</p> }
                    <div className="box-input">
                        <label htmlFor="name">Nome: </label>
                        <input id="name" type="text"
                            value={this.state.name}
                            onChange={ this.changeName } />
                    </div>
                    <div className="box-input">
                        <label htmlFor="email">Email: </label>
                        <input id="email" type="email"
                            value={this.state.email}
                            onChange={ this.changeEmail } />
                    </div>
                    <div className="box-input">
                        <label htmlFor="password">Senha: </label>
                        <input id="password" type="password"
                            value={this.state.password}
                            onChange={ this.changePassword } />
                    </div>
                    <input type="submit" value="CADASTRAR" />
                </form>
            </div>
        )
    }
}