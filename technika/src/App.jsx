import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { TechCard } from './techCard';
import data from './data.json'
import { StartPage } from './startPage';

function App() {

  const [questions, setQuestions] = useState(data.questions)
  const [userAnswer,setUserAnswer] = useState()
  const [currentQ, setCurrentQ] = useState()
  
 
  const start = () => {
    setCurrentQ(data.questions[0])
  }

  const back = () => {
    console.log("back")
  }

  const forward = () => {
    console.log("forward")
  }


  return (
   <Paper align="center" sx={{display: "flex", justifyContent: "center", flexDirection: 'column'}}>
    {currentQ ? 
      <TechCard 
        question={currentQ} 
        back={back} 
        forward={forward}
        /> 
        : <StartPage onClick={start}/> }
   </Paper>
  );
}

export default App;
