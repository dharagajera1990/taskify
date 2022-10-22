import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import "./TodoList.css";
import moment from "moment";

const TodoList = ({ tasks, setTasks }) => {
  const handleDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    localStorage.setItem("dataKey", JSON.stringify(tasks.filter((t) => t.id !== id)));

  };
  return (
    <Container maxWidth="lg" className="list-wrapper">
      <h3>To Do</h3>
      {tasks && tasks.map((key, index) => (
        <Card
          variant="outlined"
          sx={{ maxWidth: 275 }}
          key={index}
          className="task-card"
        >
          <CardContent>
            <Button className="float-right" size="small">
              <EditIcon />
            </Button>
            <Typography>
              <b>Title:</b> {" "}
              <div className="title-wrapper text-overflow">{key.title}</div>
            </Typography>
            <Typography variant="body2">
              <br />
              <b>Description:</b>
              <div className="description-wrapper text-overflow">
                {" "}
                {key.description}
              </div>
            </Typography>
            <Typography variant="body2">
              <br />
              <b>DeadLine:</b>{" "}
              {moment(key.date).format("MMMM Do YYYY, h:mm:ss a")}{" "}
            </Typography>
            <Button
              className="float-right"
              size="small"
              color="error"
              variant="danger"
              onClick={() => handleDelete(key.id)}
            >
              <DeleteIcon />
            </Button>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      ))}
    </Container>
  );
};

export default TodoList;
