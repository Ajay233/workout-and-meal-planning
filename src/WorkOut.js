import React from "react";

const WorkOut = (props) => {

    const { title } = props;

    return(
        <>
            <h1>Workout</h1>
            <div>{title}</div>
        </>
    );
}

export default WorkOut;