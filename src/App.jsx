import React from 'react';
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import {question} from './question'


function App() {



  

  const [num,SetNum] = React.useState([]);
  const [que,SetQue] = React.useState(question);


  const randomQuestion = que[Math.floor(Math.random() * que.length)];

  const [bar,SetBar] = React.useState(0);
  console.log(bar)

  const [quetoask,SetQueToAsk] = React.useState(randomQuestion);

  console.log(quetoask)
  


  const handleClick = (num) => {
   
    return (SetNum(prev => [...prev, num]))
  }

  const renderKey = (num) => {
    return (
      <div 
      className="lockerkeypad__key" 
      id ="key"
      onClick={() => handleClick(num)}
      >{num}</div>
    )
  }

  // let question = "Enter the password to open the locker"

  function clear(){
    console.log("clear");
    SetNum(prev => prev.slice(0, -1));
  }

  if(bar === 3){
    SetBar(0);
    SetQueToAsk({que: "You have opened the locker🎉", ans: "SUCCESS"})
    SetNum(['SUCCESS'])
  }


 const open = () => {
    console.log("open")
    console.log(num.join(''));
    console.log(quetoask.ans);
    
    if (num.join('') == quetoask.ans){
      SetNum([]);
      console.log("correct!");
      document.querySelectorAll('.bar')[bar].style.backgroundColor = "green";
      SetBar(bar + 1);
      SetQueToAsk(que[Math.floor(Math.random() * que.length)]);
    }
 
}
 
 

  return (
    <>
      <div className="container">
        <div className="locker">

          <div className="lockerheader" id="">
            {/* <p>{question}</p> */}
            {quetoask.que}
          </div>

          <div className="lockersceen">
            <div className="lockersceen__text" id="lockersceen__text">
              <p>{num}</p>
            </div>
          </div>

          <div className="lockerkeypad">

            <div className="lockerkeypad__row">
  
              {renderKey(1)}
              {renderKey(2)}
              {renderKey(3)}
              
            </div>

            <div className="lockerkeypad__row">
        
            {renderKey(4)}
              {renderKey(5)}
              {renderKey(6)}
            </div>

            <div className="lockerkeypad__row">
         
            {renderKey(7)}
              {renderKey(8)}
              {renderKey(9)}
            </div>
          </div>

          <div className="lokersubmit">

              <div 
              className="open"
              onClick={() => open()}
              id = "open"
              >Enter</div>

              <div 
              className="clear"
              onClick={()=>handleClick(0)}
              >0</div>

              <div 
              className="clear"
              onClick={clear}
              >Clear</div>
          </div>

          <div className="lockerhint">
            <p>💡Hint : </p>
          </div>

        <div className="progress">
          <div className="bar" ></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        </div>

    

      </div>

      <div className="me">
        <a href="https://linktr.ee/developedbyjk">developedbyjk 👋</a>
      </div>
    </>
  )
}

export default App
