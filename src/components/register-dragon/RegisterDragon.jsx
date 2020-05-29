import React, { Component } from 'react'
import axios from 'axios'
import { history } from '../../history'
import Menu from '../menu/Menu';
import './RegisterDragon.scss';
import Service from '../services/service'

export default class RegisterDragon extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            sucess: '',
            error: ''
        }
        this.service = new Service();
        this.changeName = this.changeName.bind(this);
        this.changeType = this.changeType.bind(this);
    }

    changeName(event) {
        this.setState({ name: event.target.value })
    }

    changeType(event) {
        this.setState({ type: event.target.value })
    }

    clear() {
        this.setState({ name: '', type: '', sucess: '', error: '' })
    }

    save = async e => {
        e.preventDefault();
        try {
            this.clear();
            const { name, type } = this.state;
            if (!name || !type) {
                this.setState({ error: "Todos campos são obrigatórios." });
            } else {
                await this.service.registerDragon({ name, type });
                this.clear();
                this.setState({sucess: "Dragão cadastrado, com sucesso!"});
            }
        } catch {
            this.setState({
                error: "Houve um problema com o cadastro, por favor tente mais tarde."
            });
        }            
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="RegisterDragon">
                    <form onSubmit={this.save}>
                        <h2>Cadastro de Dragão</h2>
                        { this.state.error && <p className="message-error">{ this.state.error }</p> }
                        { this.state.sucess && <p className="message-sucess">{ this.state.sucess }</p> }
                        <div className="box-input">
                            <label htmlFor="name">Nome: </label>
                            <input id="name" type="text"
                                value={this.state.name}
                                onChange={ this.changeName } />
                        </div>
                        <div className="box-input">
                            <label htmlFor="type">Tipo: </label>
                            <input id="type" type="text"
                                value={this.state.type}
                                onChange={ this.changeType } />
                        </div>
                        <input type="submit" value="CADASTRAR" />
                    </form>
                </div>
            </div>
        )
    }
}