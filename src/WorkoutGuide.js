import React from "react";
import {useState} from "react";
import WorkOut from "./WorkOut";
import {workOutData} from "./WorkoutData";
import "./WorkoutGuide.css"

const WorkoutGuide = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const renderPage = () => {
        switch (currentPage) {
            case 2: return <WorkOut workout={workOutData.backAndArmsOne}/>;
            case 3: return <WorkOut workout={workOutData.quadAndHamstringsOne}/>;
            case 4: return <WorkOut workout={workOutData.chestAndDeltsTwo}/>;
            case 5: return <WorkOut workout={workOutData.backAndArmsTwo}/>;
            case 6: return <WorkOut workout={workOutData.quadAndHamstringsTwo}/>;
            default: return <WorkOut workout={workOutData.chestAndDeltsOne}/>;
        }
    }

    return(
        <div>
            <button onClick={() => setCurrentPage(1)} className={"workout-button"}>Chest and Delts 1</button>
            <button onClick={() => setCurrentPage(2)} className={"workout-button"}>Back and Arms 1</button>
            <button onClick={() => setCurrentPage(3)} className={"workout-button"}>Quad and Hamstrings 1</button>
            <button onClick={() => setCurrentPage(4)} className={"workout-button"}>Chest and Delts 2</button>
            <button onClick={() => setCurrentPage(5)} className={"workout-button"}>Back and Arms 2</button>
            <button onClick={() => setCurrentPage(6)} className={"workout-button"}>Quad and Hamstrings 2</button>
            <div className={"workout-guide"}>{renderPage()}</div>
        </div>
    );
}

export default WorkoutGuide;