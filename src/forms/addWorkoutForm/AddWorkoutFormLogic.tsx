import React, {Dispatch, SetStateAction} from 'react';
import WorkoutModel from "../../models/WorkoutModel"
import AddWorkoutFormView from "./AddWorkoutForm"
import {addWorkout} from "../../Connector"
import { FormValues } from './AddWorkoutForm';
import { useForm } from "react-hook-form";

interface Props {
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

const AddWorkoutFormLogic: React.FC<Props> = ({setWorkouts}) => {

  const {
    control,
    handleSubmit
  } = useForm<FormValues>();

  const constructAndAddWorkout: (model: FormValues) => void = ({date, time, duration}) => {
    
    const justDate = date.toISOString().split("T")[0]
    const justTime = time.toISOString().split("T")[1]
    const startDateTime = new Date(`${justDate}T${justTime}`)

    const workout: WorkoutModel = {
      username: "domryuken",
      startTime: startDateTime,
      duration: duration,
      exercises: []
    }

    addWorkout(workout, setWorkouts)
  }

  return (
    <AddWorkoutFormView
      handleSubmit={handleSubmit(constructAndAddWorkout)}
      control={control}
    />
  );
}

export default AddWorkoutFormLogic;
