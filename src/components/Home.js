import React, { Component } from 'react'
import { Button } from 'reactstrap'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <p className="App-intro">
                    Peça sua pizza nessa simples aplicação criada em react.js + ibm watson.
                </p>
                <Button color="danger">Danger!</Button>
            </div>
        )
    }
}

export default Home