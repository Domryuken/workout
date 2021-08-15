
import AddExerciseForm, { FormValues } from "./AddExerciseForm"
import { useForm } from "react-hook-form";

const AddExerciseFormLogic = () => {

  const {
    control,
    handleSubmit
  } = useForm<FormValues>();

  const constructAndAddExercise: (model: FormValues) => void = () => {
  }

  return (
    <AddExerciseForm
      onSubmit={constructAndAddExercise}
    />
  );
}

export default AddExerciseFormLogic;
