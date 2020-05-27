import React, { Component } from 'react'
import axios from 'axios'
import { history } from '../../history'
import Menu from '../menu/Menu';
import './Register.scss';

const BASE_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
const initialState = { name: '', type: '' }

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { ...initialState }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;

        this.setState({
            [name]: target.value
        });
    }

    clear() {
        this.setState({ name: '', type: '' })
    }


    
    save = e => {
        axios["post"](BASE_URL, {
                name: this.state.name,
                type: this.state.type
            })
            .then(_ => this.clear() )
            .catch((err) => console.log(err));
            e.preventDefault();
    }


    render() {
        return (
            <div>
                <Menu />
                <div className="Register">
                    <form onSubmit={this.save}>
                        <div className="box-input">
                            <label htmlFor="name">Usuário</label>
                            <input name="name" type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="Nome" required />
                        </div>
                        <div className="box-input">
                            <label htmlFor="type">Tipo</label>
                            <input name='type' type="text" value={this.state.type} onChange={this.handleInputChange} placeholder="Tipo" required/>
                        </div>
                        <input type="submit" value="Cadastrar" />
                    </form>
                </div>
            </div>
        )
    }
}