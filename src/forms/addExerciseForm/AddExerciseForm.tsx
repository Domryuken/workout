
import AddExerciseFormView, { FormValues } from "./AddExerciseFormView"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import WorkoutModel from "../../models/WorkoutModel";
import { addWorkout } from "../../Connector";
import { WorkoutContext } from "../../context/WorkoutContext";

interface Props {
  workout: WorkoutModel
}

const AddExerciseForm: React.FC<Props> = ({workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)
  const {control, handleSubmit} = useForm<FormValues>();

  const constructAndAddExercise: (formValues: FormValues) => void = ({exerciseName}) => {

    const updatedWorkout: WorkoutModel = {
      ...workout,
      exercises: [
        ...workout.exercises,
        {
          name: exerciseName,
          sets: []
        }
      ]
    }

    addWorkout(updatedWorkout, setWorkouts)
  }

  return (
    <AddExerciseFormView
      handleSubmit={handleSubmit(constructAndAddExercise)}
      control={control}
    />
  );
}

export default AddExerciseForm;
