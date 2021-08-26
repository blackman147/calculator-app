import React, {useState, useEffect} from 'react'


const Screen = ({equation, result}) => {
    const [prev, setPrev] = useState(result)

    useEffect(() => {
        
        return () => {
           console.log(2+3)
           setPrev(result)
        }
    }, [result])

    const results = []

    return(
      <div className = "screen-div">
         <h1 style={{fontSize:"40px", marginBottom : "3px", marginRight :"2rem"}}>{result}</h1>
         <p style={{fontWeight:'bold', marginRight: "2rem", marginTop: "unset", marginBottom: "unset"}}>{equation}</p>
         <div style = {{margin: "1rem"}} >
                <h5 style = {{textAlign: "left", marginBottom:"unset", marginTop: "unset"}}>Prev calculation {prev}</h5>
         </div>
      </div>
    )
  }
  
  export default Screen;