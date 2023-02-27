import { useState } from 'react';
import { Paper } from '@mui/material';
import { TechCard } from './techCard';
import data from './data.json'

function App() {

  const [questions, setQuestions] = useState(data.questions)
  const [userAnswer, setUserAnswer] = useState([])
  const [currentQ, setCurrentQ] = useState(questions[1])

  return (
   <Paper align="center">
    <TechCard 
      question={currentQ}
    />
   </Paper>
  );
}

export default App;
