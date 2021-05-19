import React, { useContext, useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
// import noImagePic  from '../img/no_image.jpeg';
import highKneesPic from "../img/high-knees.jpg";
import sitUpsPic from "../img/sit-ups.jpg";
import calfRaisesPic from "../img/calf-raises.jpg";
import jumpingJacksPic from "../img/jumping-jacks.png";
import squatsPic from "../img/squats.jpg";
import pushUpsPic from "../img/pushups.jpg";
import bicepCurlsPic from "../img/bicep-curls.jpg";
import lungesPic from "../img/lunges.jpg";
import burpeesPic from "../img/burpees.jpg";
import pullupsPic  from "../img/pullups.jpg";
import planksPic  from "../img/planks.jpg";
import widepushupsPic  from "../img/widepushups.jpg";
import diamondpushupsPic  from "../img/diamondpushups.png";
import mountainclimbersPic  from "../img/mountainclimbers.jpg";
import sideplanksPic  from "../img/sideplank.jpg";
import legRaisePic  from "../img/legraise.jpg";
import crunchesPic  from "../img/crunches.jpg";

import { AuthContext } from "../firebase/Auth";
import axios from "axios";

const style = makeStyles({
  card: {
    margin: "20px auto",
    height: "auto",
    borderRadius: "20px",
    maxWidth: "250px",
  },
  img: {
    height: "300px",
  },
});

const Home = () => {
  let items = null;
  let loop = [0, 1, 2];
  const level = Math.floor(Math.random() * 3);

  const styles = style();
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { currentUser } = useContext(AuthContext);
  
  const recommendWorkout = (number) => {
      const workouts = [
          [{name: "Jumping Jacks", img: jumpingJacksPic, sets: "3", reps: "20"},
          {name: "Squats", img: squatsPic, sets: "3", reps: "12"},
          {name: "Push-Ups", img: pushUpsPic, sets: "3", reps: "10"}],
          [{name: "Bicep Curls", img: bicepCurlsPic, sets: "3", reps: "10"},
          {name: "Lunges", img: lungesPic, sets: "3", reps: "12"},
          {name: "Burpees", img: burpeesPic, sets: "3", reps: "10"}],
          [{name: "High Knees", img: highKneesPic, sets: "3", reps: "20"},
          {name: "Sit-Ups", img: sitUpsPic, sets: "3", reps: "10"},
          {name: "Calf-Raises", img: calfRaisesPic, sets: "3", reps: "12"},],
          [{name: "Pull Ups", img: pullupsPic, sets: "3", reps: "20"},
          {name: "Planks", img: planksPic, sets: "3", reps: "10"},
          {name: "Diamond Push-Ups", img: diamondpushupsPic, sets: "3", reps: "12"},],
          [{name: "Crunches", img: crunchesPic, sets: "3", reps: "20"},
          {name: "Mountain Climbers", img: mountainclimbersPic, sets: "3", reps: "10"},
          {name: "Side Planks", img: sideplanksPic, sets: "3", reps: "12"},],
          [{name: "Wide Push-Ups", img: widepushupsPic, sets: "3", reps: "20"},
          {name: "Leg Raises", img: legRaisePic, sets: "3", reps: "10"},
          {name: "Pull-Ups", img: pullupsPic, sets: "3", reps: "12"},],
      ];
    return (
      <Grid item xs={4} sm={4} lg={4} xl={4} key={number}>
        <Card variant="outlined" className={styles.card}>
          <CardMedia
            className={styles.img}
            component="img"
            image={workouts[level][number].img}
            title={workouts[level][number].name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {workouts[level][number].name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sets: {workouts[level][number].sets}, Reps: {workouts[level][number].reps}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      );
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await axios.get(`/users/${currentUser.email}`);
        setUserInfo(data);
        setLoading(false);
      } catch (e) {
        console.log(e);
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (true) {
    items = loop.map((i) => {
      return recommendWorkout(i);
    });
  }
  if (loading) {
    return (
      <div className="intro-text">
        <p>Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="intro-text">
        <p>Error</p>
      </div>
    );
  } else {
    return (
      <div className="home">
        <div>
          <h1 className="intro-text">Welcome {userInfo.name}!</h1>
          <p className="intro-text">Check out your personal journal and see what others have to say on the social page!</p>
        </div>

        <div className="recommendation">
          <h2>A Recommended Workout From Us</h2>
          <br />
          <Grid container spacing={2}>
            {items}
          </Grid>
        </div>
      </div>
    );
  }
};

export default Home;
