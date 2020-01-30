import React, { FC } from "react";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TodoList from "./TodoList";
import AccountList from "./AccountList";
import User from "./User";

const Checkboxes: FC = () => {
  const [state, setState] = React.useState({
    showTodoList: false,
    showAccountList: false,
    showUserSection: false
  });

  const handleChange = (name: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({ ...state, [name]: event.target.checked });
  };
  const { showTodoList, showAccountList, showUserSection } = state;

  return (
    <div>
      <FormControl component="fieldset">
        <FormLabel component="legend">Please select option(s):</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={showTodoList}
                onChange={handleChange("showTodoList")}
                value="showTodoList"
              />
            }
            label="Todo"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={showAccountList}
                onChange={handleChange("showAccountList")}
                value="showAccountList"
                color="primary"
              />
            }
            label="Accounts"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={showUserSection}
                onChange={handleChange("showUserSection")}
                value="showUserSection"
                color="default"
              />
            }
            label="User"
          />
        </FormGroup>
      </FormControl>
      {showTodoList && <TodoList />}
      {showAccountList && <AccountList />}
      {showUserSection && <User />}
    </div>
  );
};

export default Checkboxes;
