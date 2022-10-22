import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import { Fab } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import "./DialogBox.css";

const DialogBox = ({ tasks, setTasks }) => {
  const [open, setOpen] = React.useState(false);
  const titleRef = React.useRef("");
  const descriptionRef = React.useRef("");
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const [error, setError] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      titleRef.current?.value === "" ||
      descriptionRef.current?.value === "" 
    ) {
      return setError("All fields are mandatory");
    }
    setError("");
    setTasks([
      ...tasks,
      {
        id: new Date().toString(),
        title: titleRef.current.value,
        description: descriptionRef.current.value,
        date: selectedDate.toString(),
        status: false,
      },
    ]);
    
    let dataKey = JSON.parse(localStorage.getItem("dataKey")) || [];

    dataKey.push( {
      id: new Date().toString(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: selectedDate.toString(),
      status: false,
    });

    localStorage.setItem("dataKey", JSON.stringify(dataKey));

    titleRef.current.value = "";
    descriptionRef.current.value = "";
    handleDateChange(new Date());
    setOpen(false);
  };

  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={3}>
          <Fab
            onClick={handleClickOpen}
            color="primary"
            aria-label="add"
            className="align-center"
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>

      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>To do</DialogTitle>
        <DialogContent>
          {error}
          <form onSubmit={(e) => handleSubmit(e)}>
            <Grid container direction="column">
              <DialogContentText>Add the task details</DialogContentText>
              <Grid item xs={12}>
                <div className="grid-elements">
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Title"
                    type="text"
                    fullWidth
                    variant="standard"
                    inputRef={titleRef}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="grid-elements">
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    placeholder="Description"
                    ref={descriptionRef}
                    style={{ width: "100%" }}
                  />
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="grid-elements">
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DateTimePicker
                      value={selectedDate}
                      disablePast
                      onChange={handleDateChange}
                      label="DeadLine"
                      showTodayButton
                    />
                  </MuiPickersUtilsProvider>
                </div>
              </Grid>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">submit</Button>
              </DialogActions>
            </Grid>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DialogBox;
