import steps from "./assets/steps.png";
import data from "./data.json";

export function Steps() {
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
        <h1>{steps}</h1>
        <p1 style={{ padding: "10px", color: "grey" }}>Steps Completed</p1>
      </div>
    </div>
  );
}
