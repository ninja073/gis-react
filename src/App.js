import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";
import parseJwt from "./tools";
import Welcome from "./components/Welcome";

function App() {
  const [user,setUser]=useState({})
  const handleCallbackResponse=(res)=>{
    console.log(res.credential)
    const user = parseJwt(res.credential);
    setUser(user)
    
  }
  const handleLogout=()=> {
    console.log("clicked");
    setUser({})
  }
  useEffect(()=>{
    /* global google */
    window?.google?.accounts?.id.initialize({
      client_id:"958972593913-7ji97lrouejlla2lu9ojcja9vaj0cse8.apps.googleusercontent.com",
      callback:handleCallbackResponse
    });

    google?.accounts?.id.renderButton(document.getElementById("signInDiv"),{theme:"outline",size:"large"});
  },[]);

  return user.email ?<Welcome handleLogOut={handleLogout}/> : <Login /> ;
}

export default App;
