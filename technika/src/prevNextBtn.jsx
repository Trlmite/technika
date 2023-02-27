import React from 'react';
import Fab from '@mui/material/Fab';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PrevNextBtn = () => {
  return (
    <>
        <Fab color='error' title="Atgal"><ChevronLeftIcon/></Fab>
        <Fab color='success' title='Pirmyn'><ChevronRightIcon/></Fab>
    </>
  )
}

export default PrevNextBtn