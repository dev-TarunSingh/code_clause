import "./App.css";
import kcal from "./assets/kcal.png";
import water from "./assets/water.png";
import steps from "./assets/steps.png";
import Circle from "./circle-bar.jsx";
import "react-calendar/dist/Calendar.css";
import { data } from "./data.jsx";

function App() {
  return (
    <>
      <div className="header">
        <p1>Health+</p1>
        <h1>Hi! {data.name}</h1>
      </div>
      <div className="container">
      <div className="kcal-water-step">
        <Calories />
        <div className="water-step">
          <Water />
          <Steps />
        </div>
        <div className="progresses">
          <Progress />
          <ClassProgress />
        </div>
      </div>
      <div className="dashboard2">
      <h2>Courses</h2>
        <div className="courses">
          
          <div className="course">
            <h3>Yoga</h3>
            <p1>Starts in 2 days</p1>
            <button className="button">Join</button>
          </div>
          <div className="course">
            <h3>Cardio</h3>
            <p1>Starts in 4 days</p1>
            <button className="button">Join</button>
          </div>
          <div className="course">
            <h3>Weight Training</h3>
            <p1>Starts in 6 days</p1>
            <button className="button">Join</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

const Progress = () => {
  const pro_styles = {
    backgroundColor: "rgb(126, 241, 109)",
    borderRadius: "24px",
    padding: "10px",
  };

  return (
    <div style={pro_styles} className="progress">
      <Circle />
      <p1>Today's Progress</p1>
      <div className="progress-bar">
        <div className="progress-bar-fill"></div>
      </div>
    </div>
  );
}

const ClassProgress = () => {
  const Classpro_styles = {
    backgroundColor: "rgb(126, 241, 109)",
    borderRadius: "24px",
    padding: "10px",
  };

  return (
    <div style={Classpro_styles} className="class-progress">
      <Circle />
      <p1>Class Progress</p1>
      <div className="class-progress-bar">
        <div className="class-progress-bar-fill"></div>
      </div>
    </div>
  );
};

const Steps = () => {

  const stepstyle = {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ec7777aa",
    padding: "10px",
    margin: "10px",
    borderRadius: "24px",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="steps" style={stepstyle}>
      <img src={steps} alt="steps" height="100px" width="100px" />
      <div className="counts">
        <h1>{data.steps}</h1>
        <p1 style={{ padding: "10px", color: "grey" }}>Steps Completed</p1>
      </div>
    </div>
  );
};

const Water = () => {

  const waterstyle = {
    lineheight: "0",
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#68b6faaa",
    padding: "10px",
    margin: "10px",
    borderRadius: "24px",
    justifyContent: "space-around",
    alignItems: "center",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  };

  return (
    <div className="water" style={waterstyle}>
      <img
        src={water}
        style={{ alignItems: "left" }}
        alt="water"
        height="100px"
        width="100px"
      />
      <div className="counts">
        <h1 style={{ fontweight: "bold", fontSize: "50px" }}>{data.water}</h1>
        <p1 style={{ padding: "10px", color: "grey" }}>Glass Water</p1>
      </div>
    </div>
  );
};

const Calories = () => {
  const styles = {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "hsla(53, 76%, 69%, 0.667)",
    padding: "10px",
    fontSize: "40px",
    fontweight: "bold",
    borderRadius: "24px",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
  };

  const p2style = {
    color: "grey",
    fontweight: "lighter",
    fontSize: "20px",
  };
  return (
    <div style={styles} className="sidebar">
      <img
        height="100px"
        width="100px"
        style={{ margin: "20px" }}
        src={kcal}
        alt="kcal"
      />
      <h1 style={{ fontweight: "bold", fontSize: "50px" }}>{data.kcal}</h1>
      <p2 style={p2style}>Kcal Burnt</p2>
    </div>
  );
};

export default App;