
import React, {useState} from 'react';
import Screen from './components/Screen';
import NumberButton from './components/NumberButtons';
import OperatorButton from './components/OperatorButton'
import './App.css';

const App = () => {
  const [equation, setEquation] = useState("");
  const [result, setResult] = useState(0);

  const loadEquation = (numArray, operatorArray, item) => {
      if(numArray.includes(item)){
          let data = equation+item
          setEquation(data)
      }
      else if(operatorArray.includes(item)){
          let data =equation+ " " + item + ""
          setEquation(data)
      }  

  }

  const loadResult = ()=>{
    if(equation !== ""){
        let result = eval(equation)
        setResult(result)
    }else{
          setResult(0)
    }
  }
  const clearResult = ()=>{
      setEquation("")
      setResult(0)

  }

  return(
    <div className="whole-container">
      <div className="calculator-container">
        <Screen equation = {equation} result ={result}/>
        <div className="button-container">
        <NumberButton loadEquation = {loadEquation} />
        <OperatorButton loadEquation = {loadEquation} loadResult = {loadResult} clearResult={clearResult}/>
        </div>
        
      </div>
    </div>
  )
}

export default App;
