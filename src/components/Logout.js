import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { LOGOUT } from '../constants';
import { useDispatch } from 'react-redux';
import {useHistory} from "react-router-dom";
const clientId =
  '890645719206-kk3409c4080k85ep1iprqbtjqu9usmhk.apps.googleusercontent.com';

function Logout() {
  const history =useHistory();
  const dispatch =useDispatch();
  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');

    try {
      dispatch({ type: LOGOUT});
    
      history.push('/');
    } catch (error) {
      console.log(error);
    }
    
  
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;