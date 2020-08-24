import React from 'react'
import { connect } from 'react-redux'
import './Search.scss';

const Pesquisar = props => (
    <div>
        {console.log(props.novoEstado)}
        <input type="text" onChange={(event) => props.clickReducer(event.target.value) }/>
    </div>
)

const mapStateToProps = state => {
    return {
        novoEstado: state.clickReducer
    }
}

export default connect(mapStateToProps)(Pesquisar);