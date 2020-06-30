import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const permission = false;

function Admin(props) {
    return (
        <Route render={()=>(
                permission ? (<h3>Panel admina</h3>) : (
                    <Redirect to='/login'/>
                )
            )
        }/>
    );
}

export default Admin;