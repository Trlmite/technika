import React from 'react';
import Fab from '@mui/material/Fab';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PrevNextBtn = ({back, forward}) => {
  return (
    <>
        <Fab color='error' title="Atgal" onClick={back}><ChevronLeftIcon/></Fab>
        <Fab color='success' title='Pirmyn' onClick={forward}><ChevronRightIcon/></Fab>
    </>
  )
}

export default PrevNextBtn