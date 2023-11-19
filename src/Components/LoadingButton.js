import React from "react";
import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import green from "@material-ui/core/colors/green";
import red from "@material-ui/core/colors/red";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: 30,
    position: "relative",
    fontFamily: 'MyCustomFont, Arial, sans-serif',
    borderRadius:0,
  },
  progress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },
  customFont: {
    fontFamily: 'Starbirl, Arial, sans-serif',
  },
}));

export default function LoadingButton(props) {
  const classes = useStyles();
  const { children, loading, valid, success, fail, onClick, ...other } = props;
  return (
    <div className={classes.wrapper}>
      <Button
        variant="contained"
        border="0"
        color="primary"
        fullWidth
        disabled={loading || !valid}
        type="submit"
        onClick={onClick}
        {...other}
      >
        {children}
      </Button>
      {loading && <CircularProgress size={24} className={classes.progress} />}
    </div>
  );
}
