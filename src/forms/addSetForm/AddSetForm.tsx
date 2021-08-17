
import { useForm } from "react-hook-form";
import { useContext } from "react";
import WorkoutModel from "../../models/WorkoutModel";
import { WorkoutContext } from "../../context/WorkoutContext";
import AddSetFormView from "./AddSetFormView";
import { addNewSetService } from "../../UpdateMongoService";

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

  const onSubmit = ({reps, weight}: FormValues) => {
    addNewSetService(reps, weight, workout, idx, setWorkouts)
  }

  return (
    <AddSetFormView
      handleSubmit={handleSubmit(onSubmit)}
      control={control}
    />
  );
}

export default AddExerciseForm;


  