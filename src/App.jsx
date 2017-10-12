import React, { Component } from 'react';


class App extends Component {
    constructor(){
        super();

        this.state = {
            lochnessMonster: 3.50
        }
    }

    render(){
        return (
            <div className='container'>
                Homepage
            </div>
        );
    }
}

export default App;