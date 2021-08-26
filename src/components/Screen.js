import React from 'react'


const Screen = (props) => {

    // useEffect(() => {
        
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    return(
      <div>
         <h1 style={{fontSize:"40px", marginBottom : "3px", marginRight :"2rem"}}>{props.result}</h1>
         <p style={{fontWeight:'bold', marginRight: "2rem"}}>{props.equation}</p>
      </div>
    )
  }
  
  export default Screen;