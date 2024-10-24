import "./App.css";
import Timer from "./components/Timer";
import Settings from "./components/Settings";

function App() {
  return (
    <div>
      <header>
        <h1>Pomodoro App</h1>
      </header>
      <Timer/>
      <Settings/>
    </div>
  );
}

export default App;
