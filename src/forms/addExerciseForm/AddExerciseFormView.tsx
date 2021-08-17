import React, { FormEventHandler } from "react";
import { Control, Controller } from "react-hook-form";
import { Select, MenuItem } from "@material-ui/core";
import { FormValues } from "./AddExerciseForm";

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>
  control: Control<FormValues>
}

export const AddExerciseFormView: React.FC<Props> = ({ handleSubmit, control }) => {

  return (
    <form onSubmit={handleSubmit} className="border">
      <h1>Add exercise</h1>
      <Controller
        name="exerciseName"
        defaultValue={"Pushup"}
        control={control}
        render={({ field }) => 
          <Select
            {...field}
            displayEmpty
          >
            <MenuItem value={"Pushup"}>Pushup</MenuItem>
            <MenuItem value={"Pullup"}>Pullup</MenuItem>
            <MenuItem value={"Squat"}>Squat</MenuItem>
          </Select>
        }
      />
      <input type="submit" value="Add exercise"/>
    </form>
  )
}

export default AddExerciseFormView
