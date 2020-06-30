import React from 'react';

function login(props) {
    return (
        <div>
            <label htmlFor="">Podaj login<input type='text'/></label><br/>
            <label htmlFor="">Podaj hasło<input type='text'/></label><br/>
            <button>Zaloguj się</button>
        </div>
    );
}

export default login;