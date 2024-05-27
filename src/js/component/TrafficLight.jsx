import React, {useState} from "react";

const TrafficLight = () =>{
    return(
        <div>
            <div className="card barra" style={{height: "120px", width: "15px", backgroundColor: "grey", margin: "auto"}}>
            </div>
            <div className="card semaforo" style={{height: "305px", width: "120px", backgroundColor: "grey", margin: "auto"}}>
                <div className="firstLight"></div>
                <div className="secondLight"></div>
                <div className="thirdLight"></div>
            </div>
        </div>

    )
}


export default TrafficLight;