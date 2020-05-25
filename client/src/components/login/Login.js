import React, {useState} from 'react';
import './Login.scss';

export default props => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function changeEmail(e) {
        setEmail(e.target.value);
    }

    function  changePassword(e) {
        setPassword(e.target.value);
    }

    function handleSubmit(event) {
        alert('Um nome foi enviado: ' + this.state.value);
        event.preventDefault();
      }

    
    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
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