import { Paper, Typography } from '@mui/material';
import { TechCard } from './techCard';
import  PrevNextBtn  from "./prevNextBtn";

function App() {
  return (
   <Paper sx={{p: 2}} align="center">
    <Typography variant="h2" color="initial" align="center">
      Technika
    </Typography>
    <TechCard />
    <PrevNextBtn />
   </Paper>
  );
}

export default App;
