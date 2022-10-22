import React, { useState } from "react";
import Appbar from "./component/Appbar";
import TodoList from "./component/TodoList";
import DialogBox from "./component/DialogBox";
import Container from "@mui/material/Container";
function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('dataKey')) || []);

  return (
    <>
      <Appbar />
        <Container maxWidth="lg">
        <DialogBox tasks={tasks} setTasks={setTasks} />
        <TodoList tasks={tasks} setTasks={setTasks} />
      </Container>
    </>
  );
}

export default App;
