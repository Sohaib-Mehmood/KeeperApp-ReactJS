import React from "react";

const date = new Date(2022,1,1,8);
const currentTime = date.getHours();

let greeting;
const customeStyle = {
    color: ""
}

if(currentTime < 12){
    greeting = "Good Morning";
    customeStyle.color = "red";
}else if(currentTime < 18){
    greeting = "good Afternoon";
    customeStyle.color = "green";
}else{
    greeting = "Good Night";
    customeStyle.color = "blue";
}

function Greetings(){
    return (
        <div>
            <h1 style={customeStyle}>{greeting}</h1>
        </div>
    )
}

export default Greetings;