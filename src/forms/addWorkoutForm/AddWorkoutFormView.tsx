import React, { FormEventHandler } from "react";
import { Control, Controller, UseFormHandleSubmit } from "react-hook-form";
import TextField from '@material-ui/core/TextField';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker } from '@material-ui/pickers';

interface Props {
  handleSubmit: FormEventHandler<HTMLFormElement>
  control: Control<FormValues>,
}

export interface FormValues {
  date: Date,
  time: Date,
  duration: number
}

export const AddWorkoutFormView: React.FC<Props> = ({handleSubmit, control}) => {

  return (
    <div className="border">
      <form onSubmit={handleSubmit}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <h1>Add workout</h1>

            <Controller
              name="date"
              control={control}
              defaultValue={new Date()}
              render={({ field }) => 
                <KeyboardDatePicker
                  {...field}
                  label="Date"
                  variant="inline"
                />
              }
            />

            <Controller
              name="time"
              control={control}
              defaultValue={new Date()}
              render={({ field }) =>
                <KeyboardTimePicker
                  {...field}
                  label="Start time"
                  variant="inline"
                />
              }
            />

            <Controller
              name="duration"
              control={control}
              defaultValue={1}
              render={({ field }) =>
                <TextField
                  {...field}
                  label="Duration"
                  type="number"
                />
              }
            />
                
            <input type="submit" value="Add workout"/>
                
        </MuiPickersUtilsProvider> 
      </form>
    </div>
  )
}

export default AddWorkoutFormView
