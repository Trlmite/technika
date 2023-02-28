import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { TechCard } from './techCard';
import data from './data.json'
import { StartPage } from './startPage';

function App() {

  const [questions, setQuestions] = useState(data.questions)
  const [userAnswer, setUserAnswer] = useState([])
  const [currentQ, setCurrentQ] = useState()
  const [questionNumber, setQuestionNumber] = useState(0)

  const start = () => {
    setCurrentQ(questions[questionNumber])
  }

  // testukui 
  const back = () => {
    console.log("back")
  }

  const forward = () => {
    console.log("forward")
  }

  // atsakymo gavimui teskutai 

  const changeQ = () => {
    if(questionNumber < questions.length){
      setQuestionNumber(questionNumber + 1)
      setCurrentQ(questions[questionNumber])
      console.log(questionNumber)
    } else {
      console.log("pabaiga")
    }
  }

  const getValue = (e) => {
    console.log(e.target.value)
    let answer = {
      uAnswer: e.target.value,
      answer: currentQ.answer,
      question: currentQ
    }
    setUserAnswer( current => [...current, answer])
    changeQ()
  }

  return (
   <Paper align="center" sx={{display: "flex", justifyContent: "center", flexDirection: 'column'}}>
    {currentQ ? 
      <TechCard 
        question={currentQ} 
        back={back} 
        forward={forward}
        getValue={getValue}
        /> 
        : <StartPage onClick={start}/> }
   </Paper>
  );
}

export default App;
