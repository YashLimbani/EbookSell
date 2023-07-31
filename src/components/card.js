import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
    backgroundColor: "grey",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
      }}
    >
      <Card
        variant="outlined"
        className={classes.root}
        style={{
          width: "50%",
        }}
      >
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <span
              style={{
                color: "red",
              }}
            >
              USER{" : "}
            </span>
          </Typography>
          <Typography variant="body2" component="h2">
            Y.S Limbani <br />
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            <span
              style={{
                color: "red",
              }}
            >
              COLLEGE{" : "}
            </span>
          </Typography>
          <Typography variant="body2" component="p">
            GEC, Bhavnagar
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
