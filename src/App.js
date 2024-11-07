import React, { useState } from 'react'

const App=() =>{
  let [weight,setWeight]=useState(0);
  let [height,setheight]=useState(0);
  let [bmi,setBmi]=useState("0");
  let [message,setMessage]=useState("Enter above weight in pounds and height in inches for BMI");


  //logic
  let calBmi=(e)=>{
    e.preventDefault();
    if(weight ===0 || height===0){
      alert("Please, Enter a valid Weight and Height");
       }
       else{
         let bmi=(weight*703)/(height*height);
         setBmi(bmi.toFixed(1));
        }
        let bmi=(weight*703)/(height*height);
        if(bmi<18.5){
          setMessage("you are underWeight");
        }
       else if(bmi>=18.5 && bmi<24.9){
        setMessage("you are a healthy Weight");
      }
      else{
        setMessage("you are overWeight");
      }
      
    }
    
    let reload=()=>{
      window.location.reload();
    }
    
    return (
      <div className='app'>
        <div className="container">
        <h2>BMI Calculator</h2>
        <form action="">
          <div>
            <label htmlFor="">Weight (lbs)</label>
            <input type="text" placeholder='Enter weight value' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
          </div>

          <div>
            <label htmlFor="">Height (in)</label>
            <input type="text" placeholder='Enter height value' value={height} onChange={(e)=>setheight(e.target.value)}/>
          </div>

          <div>
            <button className='btn' type="submit" onClick={calBmi}>Submit</button>
            <button className='btn btn-outline' type="submit" onClick={reload}>Reload</button>
          </div>

          <div>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
        </div>
    </div>
  )
}

export default App;
