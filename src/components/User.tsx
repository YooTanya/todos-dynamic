import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { userModule } from "../redux/user/module";
import { Account } from "../redux/account/types";
import { getUserAndAccountStatesSelector } from "../redux/user/selectors";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2, 4),
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.background.default,
    color: theme.palette.common.black
  }
}));

const User: FC = () => {
  const classes = useStyles();
  const { userState, accountState } = useSelector(
    getUserAndAccountStatesSelector
  );
  return (
    <DynamicModuleLoader modules={[userModule]}>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h6">User state:</Typography>
        <Typography variant="body2">
          {userState && userState.user.name}
        </Typography>
      </Paper>
      <Paper variant="outlined" className={classes.paper}>
        <Typography variant="h6">Account state:</Typography>
        <ul>
          {accountState &&
            accountState.accounts.map((account: Account) => {
              return (
                <li>
                  <Typography variant="body2">{account.accountName}</Typography>
                  <Typography variant="body2">
                    {account.accountNumber}
                  </Typography>
                </li>
              );
            })}
        </ul>
      </Paper>
    </DynamicModuleLoader>
  );
};
export default User;
