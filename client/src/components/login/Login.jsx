import React, {useState} from 'react';
import axios from 'axios'
import { history } from '../../history'
import './Login.scss';

export default props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const BASE_URL = 'http://localhost:3001/users'

    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function  changePassword(e) {
        setPassword(e.target.value);
    }

    function connect(event) {
        axios.get(`${BASE_URL}/1`).then((response) => {
            localStorage.setItem('app-token', response.id);
            history.push('/listar')
        })
        .catch((err) => console.log(err));
        event.preventDefault();
    }

    
    return (
        <div className="Login">
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