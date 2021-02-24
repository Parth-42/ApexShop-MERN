import React from 'react'
import { Spinner } from 'react-bootstrap'
 
const Loader = () => {
    return (
        <Spinner animation='grow' role='status' style={{  margin: 'auto', display: 'block', position: 'absolute', top: '50%', left: '50%'}}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default Loader
