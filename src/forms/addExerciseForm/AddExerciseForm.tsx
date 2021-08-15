
import AddExerciseFormView, { FormValues } from "./AddExerciseFormView"
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import WorkoutModel from "../../models/WorkoutModel";
import { addWorkout } from "../../Connector";

interface Props {
  workout: WorkoutModel,
  setWorkouts: Dispatch<SetStateAction<WorkoutModel[]>>
}

const AddExerciseForm: React.FC<Props> = ({workout, setWorkouts}) => {

  const {
    control,
    handleSubmit
  } = useForm<FormValues>();

  const constructAndAddExercise: (formValues: FormValues) => void = ({exerciseName}) => {
    const updatedWorkout: WorkoutModel = {
      ...workout,
      exercises: [
        ...workout.exercises,
        {name: exerciseName}
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
