import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { todoModule } from "../redux/todo/module";
import { Todo, TodoModuleState } from "../redux/todo/types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2, 4),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white
  }
}));

const TodoList: FC = () => {
  const todos = useSelector(
    (state: TodoModuleState) => state.todoModule?.todos
  );
  const classes = useStyles();
  return (
    <DynamicModuleLoader modules={[todoModule]}>
      <Paper className={classes.paper}>
        <Typography variant="subtitle1">Todo List:</Typography>
        <ul>
          {todos &&
            todos.map((todo: Todo) => {
              return (
                <li key={todo.id}>
                  <Typography variant="body2">{todo.title}</Typography>
                </li>
              );
            })}
        </ul>
      </Paper>
    </DynamicModuleLoader>
  );
};

export default TodoList;
