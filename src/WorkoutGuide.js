import React from "react";
import {useState} from "react";
import WorkOut from "./WorkOut";

const WorkoutGuide = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const renderPage = () => {
        switch (currentPage) {
            case 2: return <WorkOut title={"Workout 2"}/>;
            case 3: return <WorkOut title={"Workout 3"}/>;
            case 4: return <WorkOut title={"Workout 4"}/>;
            default: return <WorkOut title={"Workout 1"}/>;
        }
    }

    return(
        <div>
            <button onClick={() => setCurrentPage(1)}>Page 1</button>
            <button onClick={() => setCurrentPage(2)}>Page 2</button>
            <button onClick={() => setCurrentPage(3)}>Page 3</button>
            <button onClick={() => setCurrentPage(4)}>Page 4</button>
            <div>{renderPage()}</div>
        </div>
    );
}

export default WorkoutGuide;