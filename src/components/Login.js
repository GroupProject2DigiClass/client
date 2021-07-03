import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { AUTH } from "../constants/index";
import { GoogleLogin } from "react-google-login";

// refresh token
// import { refreshTokenSetup } from "../components/refreshgoogletoken";

const clientId =
  "890645719206-kk3409c4080k85ep1iprqbtjqu9usmhk.apps.googleusercontent.com";

function Login() {
  const history = useHistory();
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log(token);
    console.log(result);
    console.log(res.accessToken);
  
    try {
      dispatch({ type: AUTH, data: { result, token } });
    
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
    // refreshTokenSetup(res);
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(`Failed to login.  `);
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        isSignedIn={true}
      />
    </div>
  );
}

export default Login;
