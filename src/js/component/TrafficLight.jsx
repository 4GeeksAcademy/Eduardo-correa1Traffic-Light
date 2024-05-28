import React, {useState} from "react";

const TrafficLight = () =>{
    const [selectedLight, setSelectedLight] = useState("secondLight");
    return(
        <div>
            <div className="card barra" style={{height: "120px", width: "15px", backgroundColor: "grey", margin: "auto"}}>
            </div>
            <div className="card semaforo" style={{height: "305px", width: "120px", backgroundColor: "grey", margin: "auto"}}>
                <div className={`firstLight ${selectedLight === "firstLight" ? "sombraRoja" : ""}`} onClick={()=> setSelectedLight("firstLight")}></div>
                <div className={`secondLight ${selectedLight === "secondLight" ? "sombraAmarilla" : ""}`} onClick={()=> setSelectedLight("secondLight")}></div>
                <div className={`thirdLight ${selectedLight === "thirdLight" ? "sombraVerde" : ""}`} onClick={()=> setSelectedLight("thirdLight")}></div>
            </div>
        </div>

    )
}


export default TrafficLight;