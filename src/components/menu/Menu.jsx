import React from 'react'
import { NavLink } from 'react-router-dom'
import './Menu.scss';

export default props => (
    <div className="Menu">
        <nav className='topnav' id='myTopnav'>
            <ul className="nav navbar-nav">
                <NavLink exact={true} activeClassName='active' to={"listar"}>
                    <li>Listagem</li>
                </NavLink>
                <NavLink exact={true} activeClassName='active' to={"cadastro-dragao"}>
                    <li>Cadastrar dragao</li>
                </NavLink>
            </ul>
        </nav>
    </div>
)