import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

function Recipe({ recipe }) {
  const classes = useStyles();
  const { title, image, sourceUrl, readyInMinutes } = recipe;
  const [isLiked, setIsLiked] = useState(false);
  const addToFavs = () => {
    setIsLiked((prevState) => (prevState = !prevState));
  };

  return (
    <div className="recipe-container">
      <Paper className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={title} src={image} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  <a href={sourceUrl}>Recipe source</a>
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">
                  {isLiked ? (
                    <FavoriteIcon
                      style={{ cursor: "pointer", color: "green" }}
                      onClick={() => addToFavs()}
                    />
                  ) : (
                    <FavoriteBorderOutlinedIcon
                      onClick={() => addToFavs()}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                <AccessTimeIcon />
                {readyInMinutes}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Recipe;
