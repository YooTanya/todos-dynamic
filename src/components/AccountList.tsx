import Typography from "@material-ui/core/Typography";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { DynamicModuleLoader } from "redux-dynamic-modules";
import { accountModule } from "../redux/account/module";
import { Account, AccountModuleState } from "../redux/account/types";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2, 4),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    marginTop: theme.spacing(2)
  }
}));

const AccountList: FC = () => {
  const classes = useStyles();
  const accounts = useSelector(
    (state: AccountModuleState) => state.accountModule?.accounts
  );

  return (
    <DynamicModuleLoader modules={[accountModule]}>
      <Paper className={classes.paper}>
        <Typography variant="subtitle1">Account List:</Typography>
        <ul>
          {accounts &&
            accounts.map((account: Account) => {
              return (
                <li key={account.id}>
                  <span>
                    <Typography variant="body2">
                      {account.accountName}
                    </Typography>
                  </span>
                  <span>
                    <Typography variant="body2">
                      {account.accountNumber}
                    </Typography>
                  </span>
                </li>
              );
            })}
        </ul>
      </Paper>
    </DynamicModuleLoader>
  );
};

export default AccountList;
