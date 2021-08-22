import React, { FormEventHandler } from "react";
import { Control, Controller } from "react-hook-form";
import { Select, MenuItem } from "@material-ui/core";
import { FormValues } from "./AddExerciseForm";
import AddIcon from '@material-ui/icons/Add';
import { Grid, Button, Popover, Box } from '@material-ui/core';

interface Props {
  control: Control<FormValues>,
  id: string | undefined,
  open: boolean,
  anchorEl: HTMLButtonElement | null,
  handleSubmit: FormEventHandler<HTMLFormElement>,
  handleClose: () => void,
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const AddExerciseFormView: React.FC<Props> = (props) => {

  return (<>
    <Button aria-describedby={props.id} variant="contained" size="medium" color="primary" aria-label="add" onClick={props.handleOpen}>
      Add Workout
      <AddIcon />
    </Button> 

    <Popover
        id={props.id}
        open={props.open}
        anchorEl={props.anchorEl}
        onClose={props.handleClose}
        PaperProps={{
          style: { height: 'auto', minHeight: "fit-content" },
        }}
    >
      <Box margin={2}>
        <form onSubmit={props.handleSubmit} >
          <Grid container spacing={1} wrap="nowrap" >
            <Grid item>
              <Controller
                name="exerciseName"
                defaultValue={"Pushup"}
                control={props.control}
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
            </Grid >
            <Grid item>
              <Button variant="contained" size="small" color="primary" aria-label="add" type="submit" >
                <AddIcon />
              </Button> 
            </Grid>
          </Grid>
        </form>
      </Box>
    </Popover>
  </>)
}

export default AddExerciseFormView
