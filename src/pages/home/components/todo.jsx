import React, { useEffect, useState } from "react";
import "./style.css";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ReactFormProvider from "../../components/react-form-provider";
import { useForm } from "react-hook-form";
import useHandleUseForm from "../hooks/use-handle-use-form";

const getList = () => JSON.parse(localStorage.getItem("todoList")) || [];
const Todo = () => {
  const [tasks, setTasks] = useState(getList());

  const [addTod, setAddTodo] = useState(false);

  const handleSelectTask = (id) => {
    const temp = tasks.map((item) => {
      return item.id === id ? { ...item, status: !item.status } : item;
    });
    setTasks(temp);
    localStorage.setItem("todoList", JSON.stringify(temp));
  };

  const addTask = (name) => {
    const temp = [...tasks, { id: Date.now(), title: name, status: false }];
    setTasks(temp);
    localStorage.setItem("todoList", JSON.stringify(temp));
  };
  const handleSelectAll = () => {
    const temp = tasks.map((item) => {
      return { ...item, status: true };
    });
    setTasks(temp);
    localStorage.setItem("todoList", JSON.stringify(temp));
  };
  return (
    <Stack spacing={2}>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <Button onClick={() => setAddTodo(!addTod)} variant="contained">
          Add Task
        </Button>
        <Button variant="contained" onClick={handleSelectAll}>
          Select All
        </Button>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <TodoList tasks={tasks} handleSelectTask={handleSelectTask} />
        <AddTod addTod={addTod} addTask={addTask} />
      </Box>
    </Stack>
  );
};

const AddTod = ({ addTod, addTask }) => {
  const methods = useHandleUseForm();
  const { register } = methods;

  const addTodo = (inputValue) => {
    const { name } = inputValue;
    addTask(name);
  };
  return (
    <>
      <Collapse in={addTod}>
        <ReactFormProvider
          methods={methods}
          onSubmit={methods.handleSubmit(addTodo)}
        >
          <TextField label="Title" {...register("name")} />
          <Button variant="contained" type="submit">
            Submit
          </Button>
        </ReactFormProvider>
      </Collapse>
    </>
  );
};
const TodoList = ({ tasks, handleSelectTask }) => {
  return (
    <Box>
      <Stack>
        {tasks.map(({ id, status, title }) => (
          <Stack direction="row" alignItems="center">
            <Checkbox checked={status} value={status} onChange={() => handleSelectTask(id)} />
            <Typography variant="subtitle2">{title}</Typography>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
export default Todo;
