import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.scss';

export default props => (
    <div className="Menu">
        <nav className='topnav' id='myTopnav'>
            <ul className="nav navbar-nav">
                <Link>
                    <li className="active">Home</li>
                </Link>
                <Link to={"cadastrar/"}>
                    <li>Cadastrar</li>
                </Link>
                <Link to={"listar/"}>
                    <li>Lista</li>
                </Link>
            </ul>
        </nav>
    </div>
)