import React, { FormEventHandler } from "react";
import { Control, Controller } from "react-hook-form";
import { FormValues } from "./AddSetForm";
import AddIcon from '@material-ui/icons/Add';
import { Popover, TextField, Button, Box, Grid } from '@material-ui/core';


interface Props {
  control: Control<FormValues>,
  id: string | undefined,
  open: boolean,
  anchorEl: HTMLButtonElement | null,
  handleSubmit: FormEventHandler<HTMLFormElement>,
  handleClose: () => void,
  handleOpen: (event: React.MouseEvent<HTMLButtonElement>) => void,
}

export const AddSetFormView: React.FC<Props> = (props) => {

  return (<>

    <Button variant="contained" aria-describedby={props.id} size="medium" color="primary" aria-label="add" onClick={props.handleOpen}>
      Add Set
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
          <Grid container spacing={3} >
            <Grid item>
              <Controller
                name="reps"
                control={props.control}
                defaultValue={1}
                render={({ field }) => 
                  <TextField
                    {...field}
                    label="Reps"
                    type="number"
                  />
                }
              />
            </Grid>
            <Grid item>
              <Controller
                name="weight"
                control={props.control}
                defaultValue={1}
                render={({ field }) => 
                <TextField
                  {...field}
                  label="Weight"
                  type="number"
                  />
                }
              />
            </Grid>
            <Grid item>
              <Button variant="contained" size="small" color="primary" aria-label="add" type="submit">
                <AddIcon />
              </Button> 
            </Grid>
          </Grid>
        </form>
      </Box>
    </Popover>
  </>)
}

export default AddSetFormView
