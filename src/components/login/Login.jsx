import React, { Component } from 'react'
import { withRouter } from "react-router-dom"
import { Link } from 'react-router-dom'
import logo from '../../logo.svg';
import './Login.scss';
import Service from '../services/service';

class Login extends Component {

    constructor(props) {
        super(props)
        this.service = new Service()
        this.state = {
            email: '',
            password: '',
            error: ''
        }
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    changeEmail(event) {
        this.setState({ email: event.target.value })
    }

    changePassword(event) {
        this.setState({ password: event.target.value })
    }

    connect = async e => {
        e.preventDefault();
        const { email, password } = this.state;
        if (!email || !password) {
            this.setState({ error: "Preencha username e senha para continuar!" });
        } else {
            try {
                const response = await this.service.getLoginBagaceiro(email, password);
                if(response.data.length > 0) {
                    sessionStorage.setItem('app-token', response.data[0].id);
                    this.props.history.push('/listar')
                }
                else {
                    this.setState({
                        error: "Houve um problema com o login, verifique suas credenciais!"
                    });
                }
            } catch (err) {
                this.setState({
                    error: "Houve um problema com o login, verifique suas credenciais!"
                });
            }
        }
    }

    render() {
        return (
        <div className="Login">
            <form onSubmit={e => this.connect(e)}>
                <div><img src={logo} className="App-logo" alt="logo" /></div>
                { this.state.error && <p className="message-error">{ this.state.error }</p> }
                <div className="box-input">
                    <label htmlFor="email">Usuário: </label>
                    <input id="email" type="email"
                    value={this.state.email}
                    onChange={ this.changeEmail }
                    placeholder="Email" />
                </div>
               <div className="box-input">
                    <label htmlFor="password">Senha: </label>
                    <input id="password" type="password"
                    value={this.state.password}
                    onChange={ this.changePassword }
                    placeholder="Password" />
                </div>
                <input type="submit" value="ENVIAR" />
            </form>
            
            <Link to={"cadastro/"}>
                <div className="register-box">
                    <button>CADASTRAR-SE</button>
                </div>
            </Link>
        </div>
        )
    }
}

export default withRouter(Login);