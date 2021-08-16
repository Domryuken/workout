import React, { FormEventHandler } from "react";
import { Control, Controller } from "react-hook-form";
import { Select, MenuItem, TextField } from "@material-ui/core";
import { FormValues } from "./AddSetForm";

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>
  control: Control<FormValues>
}

export const AddSetFormView: React.FC<Props> = ({ handleSubmit, control }) => {

  return (
    <form onSubmit={handleSubmit} className="border">
      <h1>Add Set</h1>
      <Controller
        name="reps"
        control={control}
        render={({ field }) => 
          <TextField
            {...field}
            label="Reps"
            type="number"
          />
        }
      />
      <Controller
        name="weight"
        control={control}
        render={({ field }) => 
          <TextField
            {...field}
            label="Weight"
            type="number"
          />
        }
      />
      <input type="submit" value="Add Set"/>
    </form>
  )
}

export default AddSetFormView
