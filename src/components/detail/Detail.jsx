import React, { Component } from 'react'
import Menu from '../menu/Menu';
import './Detail.scss';
import Service from '../services/service';


export default class Detail extends Component {

    constructor(props) {
        super(props);
        const options = { day: 'numeric', year: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        this.state = {
            id: this.props.location.state.detail.id,
            name: this.props.location.state.detail.name,
            type: this.props.location.state.detail.type,
            createdAt: new Date(this.props.location.state.detail.createdAt).toLocaleDateString('pt-br', options),
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
    save = async e => {
        e.preventDefault();
        try {
            const { id, name, type } = this.state;
            if (!name || !type) {
                this.setState({ error: "Todos campos são obrigatórios." });
            } else {
                await this.service.editDragon({ id, name, type });
                this.setState({sucess: "Dragão editado, com sucesso!"});
            }
        } catch {
            this.setState({
                error: "Houve um problema com a edição, por favor tente mais tarde."
            });
        }            
    }

    render() {
        return (
            <div>
                <Menu />
                <div className="Detail">
                    <form onSubmit={this.save}>
                        <h2>Edição do Dragão</h2>
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

                        <div className="box-input">
                            <label htmlFor="createdAt">Data do cadastro: </label>
                            <input id="createdAt" type="text"
                                value={this.state.createdAt}
                                readOnly />
                        </div>
                        <input type="submit" value="EDITAR" />
                    </form>
                </div>
            </div>
        )
    }
}