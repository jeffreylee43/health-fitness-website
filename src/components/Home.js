import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Grid, Typography, makeStyles } from '@material-ui/core';
import noImagePic  from '../img/no_image.jpeg';

const style = makeStyles({
    card: {
        margin: '20px auto',
        height: 'auto',
        borderRadius: '20px',
        maxWidth: '250px'
    }
});

const Home = () =>{
    let items = null;
    let loop = [0,1,2];

    const level = Math.floor(Math.random() * 3);

    const styles = style();

    const recommendWorkout = (number) => {
        const workouts = [
            [{name: "Jumping Jacks", img: noImagePic, sets: "3", reps: "20"},
            {name: "Squats", img: noImagePic, sets: "3", reps: "12"},
            {name: "Push-Ups", img: noImagePic, sets: "3", reps: "10"}],
            [{name: "Bicep Curls", img: noImagePic, sets: "3", reps: "10"},
            {name: "Lunges", img: noImagePic, sets: "3", reps: "12"},
            {name: "Burpees", img: noImagePic, sets: "3", reps: "10"}],
            [{name: "High Knees", img: noImagePic, sets: "3", reps: "20"},
            {name: "Sit-Ups", img: noImagePic, sets: "3", reps: "10"},
            {name: "Calf-Raises", img: noImagePic, sets: "3", reps: "12"}]
        ];

        return (
            <Grid item xs={4} sm={4} lg={4} xl={4} key={number}>
                <Card variant="outlined" className={styles.card}>
                    <CardMedia
                        component='img'
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
    }

    if(true) {
        items = loop.map((i) => {
            return recommendWorkout(i);
        });
    }

    return(
        <div className = "home"> 
            {/* <nav>
                <button onClick = {handleLogout}>Logout</button>
            </nav> */}
            
            <div className="recommendation">
                <h2>A Recommended Workout From Us</h2>
                <br/>
                <Grid container spacing={2}>
                    {items}
                </Grid>
            </div>
        </div>
    )
}

export default Home;