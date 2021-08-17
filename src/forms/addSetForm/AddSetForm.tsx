
import { useForm } from "react-hook-form";
import { useContext } from "react";
import WorkoutModel from "../../models/WorkoutModel";
import ExerciseModel from "../../models/ExerciseModel";
import { addWorkout } from "../../Connector";
import { WorkoutContext } from "../../context/WorkoutContext";
import SetModel from "../../models/SetModel";
import AddSetFormView from "./AddSetFormView";

export interface FormValues {
  reps: number,
  weight: number
}

interface Props {
  workout: WorkoutModel,
  idx: number
}

const AddExerciseForm: React.FC<Props> = ({workout, idx}) => {

  const {setWorkouts} = useContext(WorkoutContext)
  const {control, handleSubmit} = useForm<FormValues>();

  const constructAndAddExercise: (formValues: FormValues) => void = ({reps, weight}) => {

    const newSet: SetModel = {
      reps: reps,
      weight: weight
    }

    const updatedExercise: ExerciseModel = {
      ...workout.exercises[idx],
      sets: [
        ...workout.exercises[idx].sets,
        newSet
      ]
    }

    const updatedWorkout: WorkoutModel = {
      ...workout,
      exercises: [
        ...workout.exercises.slice(0, idx),
        updatedExercise,
        ...workout.exercises.slice(idx+1)
      ]
    }

    addWorkout(updatedWorkout, setWorkouts)
  }

  return (
    <AddSetFormView
      handleSubmit={handleSubmit(constructAndAddExercise)}
      control={control}
    />
  );
}

export default AddExerciseForm;


  