import React from "react"; 
import "./scoreboard.css"; 

function Scoreboard(props) {

    return(

        <div className="scoreboard">
       
                <h2>{props.title}</h2>
                <h3>Click on a Pokemon to catch it, but don't catch the same one more than one!</h3>
                <h3>Current Score {props.score}</h3>
                <h3>High Score {props.highScore}</h3>
       


        </div>
    ); 
}

export default Scoreboard; 