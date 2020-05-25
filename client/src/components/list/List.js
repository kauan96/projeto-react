import React, { Component } from 'react'
import axios from 'axios'
import Menu from '../menu/Menu';
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
                // localStorage.setItem('app-token', response.id);
                // history.push('/list')
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    remove(user) {
        axios.delete(`${BASE_URL}/${user.id}`).then(resp => {
            const list = this.getUpdatedList(resp.data)
                this.setState({ list: list })
        })
    }

    getUpdatedList(item) {
        const list = this.state.list.filter(u => u.id !== item.id)
        return list
    }

    renderRows() {
        console.log("renderRows", this.state)
        return this.state.list.map(item => (
            <tr key={item.id}>
                <td>{item.createdAt}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                {/* <td>
                    <button className="btn btn-warning"
                        onClick={() => this.load(user)}>
                        <i className="fa fa-pencil"></i>
                    </button> */}
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
        )
    }
}