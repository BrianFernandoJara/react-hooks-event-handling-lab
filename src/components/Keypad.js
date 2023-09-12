// Code Keypad Component Here
import React from "react";

function enteringPassword(){
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={enteringPassword}></input>
        </div>
    )
}

export default Keypad;