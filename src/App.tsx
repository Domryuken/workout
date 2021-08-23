import {useEffect, useState} from 'react';
import WorkoutModel from './models/WorkoutModel';
import { getWorkouts } from "./Connector"
import { WorkoutContext } from './context/WorkoutContext';
import AllWorkouts from './components/AllWorkouts';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#1de9b6"
    },
    secondary: {
      main: "#ff5252"
    }
  }
})

function App() {

  const [workouts, setWorkouts] = useState<WorkoutModel[]>([]);

  useEffect(() => {
    getWorkouts(setWorkouts)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <WorkoutContext.Provider value={{workouts, setWorkouts}}>
        <AllWorkouts />
      </WorkoutContext.Provider>
    </ThemeProvider>
  );
}

export default App;
