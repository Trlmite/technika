import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { TechCard } from './techCard';
import data from './data.json'
import { StartPage } from './startPage';
import { Result } from './result';

function App() {

  const [questions, setQuestions] = useState(data.questions)
  const [userAnswer, setUserAnswer] = useState([])
  const [currentQ, setCurrentQ] = useState()
  const [questionNumber, setQuestionNumber] = useState(0)
  const [started, setStarted] = useState(false)
  const [finished, setFinished] = useState(false)

  const start = () => {
    setStarted(true)
  }

  const checkIfAnswered = () =>{
  }

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
      setFinished(true)
    }
  }

  const getValue = (e) => {
    console.log(e.target.value)
    let answer = {
      uAnswer: e.target.value,
      answer: currentQ.answer,
      question: currentQ
    }
    setUserAnswer([...userAnswer, answer])
  }

  useEffect(() => {
    changeQ()
  }, [userAnswer])

  return (
   <Paper align="center" sx={{display: "flex", justifyContent: "center", flexDirection: 'column'}}>
    <StartPage onClick={start} start={started}/>
    {(started && !finished) ? <TechCard
      question={currentQ}
      back={back}
      forward={forward}
      getValue={getValue}
    /> : null }
    {
      (started && finished) ? <Result results={userAnswer}/> : null
    }
   </Paper>
  );
}

export default App;
