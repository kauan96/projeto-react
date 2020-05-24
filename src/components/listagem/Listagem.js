import React, {useState} from 'react';
import Menu from '../menu/Menu';
import './Listagem.scss';

export default props => {
    return (
        <div className="Listagem">
        <Menu />
            <table>
                <tr>
                    <th>Data de criação</th>
                    <th>Nome</th>
                    <th>Tipo</th>
                </tr>
                <tr>
                    <td>10/05/2020</td>
                    <td>DRAGAO VIADO</td>
                    <td>VOADOR</td>
                </tr>
            </table>
        </div>
    )
}