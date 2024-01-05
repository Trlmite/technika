import { List, ListItem, Paper, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import React from 'react'

export function Result({ results, questions }) {

    const findCorrectAnswer = (answer, questions) => {
        let findQuestion = questions.find(question => question.id === answer.questionId)

        if (findQuestion.answer === answer.uAnswer) {
            return true
        } else {
            return false
        }
    }

    return (

        <Paper>
            <Typography>Rezultatai</Typography>
            <List>
                {results.map((answer, i) => {
                    let correctAns = findCorrectAnswer(answer, questions)
                    return <ListItem key={answer.questionId}>
                        <Typography padding={1}>{i + 1}. Pasirinktas atsakymas: {answer.uAnswer} </Typography>
                        {correctAns ? <CheckCircleIcon color={'success'} /> : <CancelIcon color={'error'} />}
                    </ListItem>
                })}
            </List>
        </Paper>

    )
}
