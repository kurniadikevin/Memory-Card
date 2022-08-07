
import React, {useState} from 'react';

function App() {

 const [score,setScore] = useState();
 const arrImageName = ['chilling','coding','flying','hanging','jugling','jumping','reachmoon','rocketing','sitting','standmoon'];
 
// const randomNum = Math.floor(Math.random() * 10);

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

  




  return (
    <div className="App">

      <div className='head-row'>
          <div className='title'>Memory Card</div>
          <div className='score-board'>
                <div>Score : {score}</div>
                <div> Best Score : </div>
          </div>
      </div>

      <div className='main-row'>
          <div className='img-row1'>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'/>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'/>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'/>
          </div>

          <div className='img-row2'>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'/>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'/>
                  <img src={require(`./image/${arrImageName[randomNumFunc()]}.jpg`)} alt='chilling' width='200' height='200'/>    
         </div>

      </div>

    </div>
  );
}

export default App;
