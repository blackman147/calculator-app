import React from 'react'


const NumberButtons = ({loadEquation}) => {
  const numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
    const operatorArray = ["*", "+", "-", "/", "%", "."]
    return (
    <div>
        {numArray.map((num, index) =>{
            if(num === "0"){
                return(
                    <button onClick={()=>loadEquation(numArray, operatorArray, num)} 
                        className ="num-button-zero" key={index}>{num}</button>
                )
            }else {
                    return(  
                        <button onClick={()=>loadEquation(numArray, operatorArray, num)} 
                            className="num-button" key = {index}>{num}</button>)
                }

        })}            
    </div>
    )
    }
  
  export default NumberButtons