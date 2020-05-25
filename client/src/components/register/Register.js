import React, {useState} from 'react';
import axios from 'axios'
import { history } from '../../history'
import './Register.scss';

export default props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const baseUrl = 'http://localhost:3001/users'
    const initialState = {
        user: { name: '', email: '' }
    }


    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function  changePassword(e) {
        setPassword(e.target.value);
    }

    function save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    function connect(event) {
        axios.post(`${baseUrl}`).then((response) => {
            console.log("response");
            
            if(response) {
                localStorage.setItem('app-token', response.id);
                history.push('/list')
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
        event.preventDefault();
    }

    
    return (
        <div className="Register">
            <form onSubmit={connect}>
                <div className="box-input">
                    <label htmlFor="email">Usuário</label>
                    <input id="email" type="email" value={email} onChange={changeEmail} placeholder="Email" />
                </div>
               <div className="box-input">
                    <label htmlFor="password">Senha</label>
                    <input type="password" value={password} onChange={changePassword} placeholder="Password" />
                </div>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}