import React, { Component } from 'react'
import Menu from '../menu/Menu';
import Search from '../search/Search';
import './List.scss';
import Service from '../services/service'

export default class List extends Component {

    constructor(props) {
        super(props);
        this.service = new Service()
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList() {
        this.service.getListDragon().then((resp) => {
            this.setState({ list: resp.data })
        })
            .catch((error) => console.log(error));
    }

    detail(e) {
        this.props.history.push({
            pathname: 'detalhe/' + e.id,
            state: { detail: e }
        });
    }

    remove(user) {
        this.setState({ list: this.state.list.filter(item => item.id !== user.id) });
        this.service.deleteDragon(user.id)
            .then(resp => this.getUpdatedList(resp.data))
            .catch((error) => console.log(error));
    }

    getUpdatedList(item) {
        const list = this.state.list.filter(u => u.id !== item.id)
        return list;
    }

    renderRows() {
        return this.state.list.map((item, index) => (
            <tr key={index}>
                <td>{item.createdAt}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>
                    <button className="btn-detail"
                        onClick={() => this.detail(item)}>
                        Detalhe
                    </button>
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
                <Search />
                <div className="content">
                    <div className="table-box">
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
            </div>
        )
    }
}