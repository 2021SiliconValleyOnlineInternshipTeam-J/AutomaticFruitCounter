import React from 'react';

const PrevButton = props => {
    const btn_style = {
        borderRadius: '38px',
        fontSize: '45px',
        color: 'white',
        display: 'inline-block',
        width: '204px',
        background: '#999A9C 0% 0% no-repeat padding-box',
        margin: '20px'
    }
    return (
        <div style={btn_style}>
            {props.children}
        </div>
    );
};

export default PrevButton;