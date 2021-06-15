import React from "react";
import { makeStyles } from "@material-ui/core";
import cookbook_logo from "../../assets/icon/cookbook_icon_white.png";

const useStyles = makeStyles((theme) => ({
  appLoader: {
    width: "100%",
    minHeight: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgb(0, 175, 170)",
    animation: `$shutDown 1000ms forwards ${theme.transitions.easing.easeInOut}`,
    animationDelay: "3000ms",
  },
  logo: {
    maxWidth: 200,
    animation: `$logoSpin 2000ms infinite ${theme.transitions.easing.easeOut}`,
  },
  hidden: {
    display: "none",
  },
  "@keyframes logoSpin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    },
  },
  "@keyframes shutDown": {
    from: {
      background: "rgb(0,175,170)",
    },
    to: {
      background: "transparent",
    },
  },
}));

function AppLoader({ loadingScreen }) {
  const classes = useStyles();
  return (
    <div className={loadingScreen ? classes.appLoader : classes.hidden}>
      <img className={classes.logo} src={cookbook_logo} alt="app logo" />
    </div>
  );
}

export default AppLoader;
