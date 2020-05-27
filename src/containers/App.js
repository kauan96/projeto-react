import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import Routes from './Routes'

export default props =>
    <BrowserRouter>
        <div className="App">
            <Routes />
        </div>
    </BrowserRouter>  
