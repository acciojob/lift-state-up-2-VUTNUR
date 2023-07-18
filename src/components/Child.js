import React,{useState} from "react";

const Child=({value})=>{
     const addText=(e)=>{
        value(e.target.value)
     }
    return (
        <div className="child">
            <h3>Child Component</h3>
            <input type="text" onChange={addText}/>
        </div>
    )
}
export default Child;