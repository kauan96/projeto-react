import React, { Component } from 'react'
import axios from 'axios'
import Menu from '../menu/Menu';
import Edit from './edit/Edit'
import { history } from '../../history'
import { Link } from 'react-router-dom'
import './List.scss';

const BASE_URL = 'http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon'
export default class List extends Component {
    
    constructor(props) {
      super(props);
      this.state = { list: [] }
    }

    componentDidMount() {
        this.getList();
    }

    getList() {
        axios.get(`${BASE_URL}`)
            .then((resp) => {
                this.setState({ list: resp.data })
        })
        .catch((error) => console.log(error));
    }

    edit() {
        history.push('/listar/editar')
    }

    remove(user) {
        this.setState({ list: this.state.list.filter(item => item.id != user.id)});
        axios.delete(`${BASE_URL}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(resp.data)
                
        }).catch(function (error) {
            console.log(error);
        });
    }

    getUpdatedList(item) {
        const list = this.state.list.filter(u => u.id !== item.id)
        return list
    }

    renderRows() {
        return this.state.list.map((item, index) => (
            <tr key={index}>
                <td>{item.createdAt}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>
                    <Link to={"editar/" + item.id}>
                        <button className="btn btn-warning"
                            onClick={() => this.edit(item)}>
                                Editar
                        </button>
                    </Link>
                </td>
                <td>
                    <button className="btn-exclusion"
                        onClick={() => this.remove(item)}>
                        Excluir
                    </button>
                </td>
            </tr>   
        ))
        
    }
    

     render() {
         return (
            <div className="List">
                <Menu />
                <div className="content">
                    <table>
                        <thead>
                            <tr>
                                <th>Data de criação</th>
                                <th>Nome</th>
                                <th>Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}