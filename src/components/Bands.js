import React, { Component } from 'react';
import Band from './Band'

class Bands extends Component {

    listBands = () => {
        return this.props.bands.map(band => {return <Band band={band} removeBand={this.props.removeBand}/>})
    }
    
    render() {
        return (
            <ul>
                {this.listBands()}
            </ul>
        )
    }
    
}

export default Bands