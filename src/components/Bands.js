import React from 'react'
import Band from './Band'

const Bands = (props) => {
    return (
        <div>
            <ul>
                {props.bands.map(band => <Band deleteBand={props.deleteBand} band={band} />)}
            </ul>
        </div>
    )
}

export default Bands