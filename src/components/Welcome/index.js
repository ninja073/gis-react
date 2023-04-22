import React from "react";

function Welcome({handleLogOut}){
    return(
        <div className="home" id="container">
            <div className="header"> Hello Welcome </div>
            <div><button onClick={handleLogOut}>Log out</button></div>
        </div>
       
    )
}
export default Welcome