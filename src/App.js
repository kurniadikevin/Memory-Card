
import React, {useState,useEffect} from 'react';

function App() {

 const [score,setScore] = useState(0);
 const [bestScore, setBestScore] = useState(0);
 const [arrImageName, setArrImageName ] = useState(['chilling','coding','flying','hanging','jugling','jumping','reachmoon','rocketing','sitting','standmoon'])
 const [selected, setSelected] = useState([]);

 let haveNum =[];
  
   function randomNumFunc(){
      const randomNum = Math.floor(Math.random() * 10);
          if(!haveNum.includes(randomNum)){
              haveNum.push(randomNum);
              return randomNum;
          } else {
            if(haveNum.length < 10){
              return randomNumFunc()
            } else {
              alert('there is no more number');
              return false
            }
          }
      }


      const arrShuffle = function(){
        setArrImageName(
          arrImageName.sort(() => Math.random() - 0.5)
          )
        //alert(arrImageName);
        setScore((prev) => prev + 1 ) 
      }
      
      // check if user click the same image source as before
      const gameRule = function(ev){
        let targetSrc = ev.target.src
        setSelected( (prev) => [...prev, targetSrc]);
        //alert('image src' +selected);
        if( selected.includes(targetSrc) ){
          alert(`game over your score is ${score}`);
          setBestScore(score);
          setScore(-1);
          setSelected([]);
        }
      }
/*
      useEffect(()=>{
        alert('use effect run')
        
      },[arrImageName]);
     */

  return (
    <div className="App">

      <div className='head-row'>
          <div className='title'>Memory Card</div>
          <div className='score-board'>
                <div>Score : {score}</div>
                <div> Best Score : {bestScore}</div>
          </div>
      </div>

      <div className='main-row'>
          <div className='img-row1'>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'
                   onClick={ (event)=>{gameRule(event); arrShuffle();} }  />

                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'
                  onClick={(event)=>{gameRule(event); arrShuffle();}}/>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'
                  onClick={(event)=>{gameRule(event); arrShuffle();}}/>
          </div>

          <div className='img-row2'>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'
                  onClick={(event)=>{gameRule(event); arrShuffle();}}/>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'
                  onClick={(event)=>{gameRule(event); arrShuffle();}}/>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'
                  onClick={(event)=>{gameRule(event); arrShuffle();}}/>    
         </div>
        
      </div>

    
    </div>
  );
}

export default App;
