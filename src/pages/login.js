import React, { useState } from "react";
import Login from "../components/Login";
import Logout from "../components/Logout";
import axios from "axios";
export default function home() {
  const user = JSON.parse(localStorage.getItem('profile'));
const passme=async ()=>{
  console.log(user);
  var token;
  if(user){
     token=user?.token;
  }
  
  const data = await(axios.post("http://localhost:5005/post/cityname",{token}));
console.log(data);

}



  return (<div>
<div>
<button onClick={passme}>VERIFY FOR PASSWORD</button>

</div>
<Logout />

  </div>);
}
