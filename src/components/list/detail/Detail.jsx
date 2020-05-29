import React, { Component } from 'react'
import axios from 'axios'
import { history } from '../../../history'

export default class Detail extends Component {
    constructor(props) {
        console.log(props)
        super(props);
        this.state = { 
            id: window.location.pathname.slice(-2)
        }
    }

    componentWillMount() {
        // axios.put(`${BASE_URL}/` + this.state.id, {name: "LALA"})
        //     .then((resp) => {
        //         this.setState({ list: resp.data })
        //         // localStorage.setItem('app-token', response.id);
        //         // history.push('/list')
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
    }

    save() {
        // this._asyncRequest = loadMyAsyncData().then(
        //   externalData => {
        //     this._asyncRequest = null;
        //     this.setState({externalData});
        //   }
        // );

        // axios.put(`${BASE_URL}/` + this.state.id, {name: "LALA"})
        //     .then((resp) => {
        //         this.setState({ list: resp.data })
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });
      }

    render(props) {
        return (
           <div className="Detail">
           </div>
       )
   }
}