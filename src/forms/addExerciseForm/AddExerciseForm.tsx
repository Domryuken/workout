
import AddExerciseFormView from "./AddExerciseFormView"
import { useForm } from "react-hook-form";
import { useContext } from "react";
import WorkoutModel from "../../models/WorkoutModel";
import { addWorkout } from "../../Connector";
import { WorkoutContext } from "../../context/WorkoutContext";
import { addNewExerciseService } from "../../UpdateMongoService";

export interface FormValues {
  exerciseName: string
}

interface Props {
  workout: WorkoutModel
}

const AddExerciseForm: React.FC<Props> = ({workout}) => {

  const {setWorkouts} = useContext(WorkoutContext)
  const {control, handleSubmit} = useForm<FormValues>();

  const onSubmit = (formValues: FormValues) => {
    addNewExerciseService(formValues.exerciseName, workout, setWorkouts)
  }

  return (
    <AddExerciseFormView
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
    />
  );
}

export default AddExerciseForm;
