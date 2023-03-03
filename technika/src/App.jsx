import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { TechCard } from './techCard';
import data from './data.json'
import { StartPage } from './startPage';

function App() {

  const [questions, setQuestions] = useState(data.questions)
  const [userAnswer, setUserAnswer] = useState()
  const [currentQ, setCurrentQ] = useState()
  const [questionNumber, setQuestionNumber] = useState(0)

  const start = () => {
    setCurrentQ(questions[questionNumber])
  }

  const checkIfAnswered = () =>{
  }

  console.log(questionNumber)

  // testukui 
  const back = () => {
    if (questionNumber >= 0){
      let prevQ = questionNumber - 1
      setQuestionNumber(prevQ)
      setCurrentQ(questions[prevQ])
    }
  }

  const forward = () => {
    if (questionNumber < questions.length){
      let nextQ = questionNumber + 1
      setQuestionNumber(nextQ)
      setCurrentQ(questions[nextQ])
      console.log({questionNumber,nextQ})
    }
  }

  // atsakymo gavimui teskutai 

  const changeQ = () => {
    if(questionNumber < questions.length){
      setQuestionNumber(questionNumber + 1)
      setCurrentQ(questions[questionNumber])
    } else {
      console.log(userAnswer)
    }
  }

  const getValue = (e) => {
    console.log(e.target.value)
    let answer = {
      uAnswer: e.target.value,
      answer: currentQ.answer,
      question: currentQ
    }
    if(!userAnswer){
      setUserAnswer([answer])
    } else{
      setUserAnswer( [...userAnswer, answer])
    }
  }


// netinka nes useEffect du kartus pradzioj suveikia, ir numusa start page state, ir klausimu forward, nes question number po pirmo renderio lygu 1 : \
  useEffect(() => {
    changeQ()
  }, [userAnswer])
  

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
