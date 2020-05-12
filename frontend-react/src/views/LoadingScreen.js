import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const LoadingScreen = () => {
    return(
        <div style={{ display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            minHeight: '100vh'}}>
            <PropagateLoader
            sizeUnit={"px"}
            size={15}
            color={'#0000FF'}
            loading={true}
            />
        </div>
    );
} 
export default LoadingScreen;