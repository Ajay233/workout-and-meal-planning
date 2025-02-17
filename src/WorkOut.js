import React from "react";
import "./WorkOut.css"

const WorkOut = (props) => {

    const { workout } = props;

    const renderLinks = (links) => {
        return links.map((link, i) => {
            return(
                <div key={`link-${i}`} className={"workout-video-link"}>
                    <span className={"fas fa-play-circle play-icon"} style={{color:"Red"}}></span>
                    <a href={`${link.url}`}>{`${link.title} video`}</a>
                </div>
            )
        })
    }

    const renderWorkouts = () => {
        if(workout.length === 0){
            return <div>Coming soon</div>
        }
        return workout.map((exercise, i) => {
            return(
                <div key={`exercise-${i}`} className={"workout-card"}>
                    <img src={`${exercise.workoutScreenShot}`} className={"workout-screenshot"} alt={"Place holder"}/>
                    <>{renderLinks(exercise.workoutVideoLinks)}</>
                </div>

            );
        })
    }

    return(
        <>
            <div>
                {renderWorkouts()}
            </div>
        </>
    );
}

export default WorkOut;