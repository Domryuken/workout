import React, {useState} from 'react';
import {ExerciseProps} from './Exercise';
import {WorkoutProps} from './Workout';
import {WorkoutTab} from "./WorkoutTab"

function App() {

  const pushup: ExerciseProps = {
    name: "pushup",
    weight: 10,
    reps: 20
  }

  const pullup: ExerciseProps = {
    name: "pullup",
    weight: 40,
    reps: 50
  }

  const squat: ExerciseProps ={
    name: "squat",
    weight: 70,
    reps: 80
  }

  const bench: ExerciseProps ={
    name: "bench",
    weight: 34,
    reps: 54
  }

  const row: ExerciseProps ={
    name: "row",
    weight: 32,
    reps: 12
  }

  const deadlift: ExerciseProps ={
    name: "deadlift",
    weight: 123,
    reps: 5
  }

  const testWorkouts: WorkoutProps[] = [
    {
      exercises: [
        pullup,
        pushup,
        squat,
        row
      ],
      date: "10 2 2021",
      time: "8:30",
      duration: 2
    },
    {
      exercises: [
        deadlift,
        squat
      ],
      date: "11 2 2021",
      time: "7:00",
      duration: 1.5
    },
    {
      exercises: [
        bench,
        row,
        squat,
        deadlift
      ],
      date: "12 3 2021",
      time: "5:00",
      duration: 4
    },
    {
      exercises: [
        deadlift,
        squat
      ],
      date: "11 2 2021",
      time: "7:00",
      duration: 1.5
    }
  ];

  return (
    <div className="App">
      <WorkoutTab workouts={testWorkouts}/>
    </div>
  );
}

export default App;
