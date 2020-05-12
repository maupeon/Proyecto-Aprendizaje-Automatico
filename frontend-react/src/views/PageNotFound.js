import React from 'react';
import img from '../Images/error_404.jpg';

const PageNotFound = () => {
    return(
        <div style={{margin:'0',padding:'0'}}>
            <img src={img} style={{height:'99vh', width:'99vw'}}></img>
        </div>
    )
}

export default PageNotFound;