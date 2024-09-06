import React from 'react';

const GoBackButton = () => {
    const handleClick = () => {
        window.location.href = 'https://prismcortex.net';
    };

    return (
        <button onClick={handleClick} style={buttonStyle}>
            MAIN MENU
        </button>
    );
};

const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

export default GoBackButton;