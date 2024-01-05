import { useState, useEffect } from 'react';
import { Paper } from '@mui/material';
import { TechCard } from './techCard';
import data from './data.json'
import { StartPage } from './startPage';
import { Result } from './result';

function App() {

  const [questions, setQuestions] = useState(data.questions)
  const [currentQ, setCurrentQ] = useState()
  const [questionNum, setQuestionNum] = useState(0)
  const [userAnswer, setUserAnswer] = useState([])
  const [state, setState] = useState('start')

  const startF = () => {
    setCurrentQ(questions[questionNum])
    setState('question')
  }

  const changeQ = () => {
    if (questionNum >= questions.length) {
      setState('result')
      console.log(userAnswer)
      return
    }
    setCurrentQ(questions[questionNum])
  }

  const getAnswer = (e) => {
    let answer = {
      uAnswer: e.target.value,
      questionId: Number(e.target.id)
    }
    setQuestionNum(questionNum + 1)
    setUserAnswer([...userAnswer, answer])
  }

  useEffect(() => {
    changeQ()
  }, [userAnswer])

  const run = (state) => {
    // state : 'start' - initial state, renders <StartPage>
    //          'question' - renders question, gets user answers <techCard>
    //          'result' - renders <Results>, with user answers

    switch (state) {
      default:
      case 'start':
        return <StartPage onClick={startF} />
      case 'question':
        return <TechCard
          question={currentQ}
          getValue={getAnswer}
        />
      case 'result':
        return <Result
          results={userAnswer}
          questions={questions}
        />
    }
  }

  return (
    <Paper align="center" sx={{ display: "flex", justifyContent: "center", flexDirection: 'column' }}>
      {run(state)}
    </Paper>
  );
}

export default App;
