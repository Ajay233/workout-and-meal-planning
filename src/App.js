import './App.css';
import NavBar from "./NavBar";
import WorkoutGuide from "./WorkoutGuide";

function App() {
  return (
    <div className="App">
      <NavBar/>
        <div className={"main-heading"}>Workout Guide</div>
        <WorkoutGuide/>
    </div>
  );
}

export default App;
