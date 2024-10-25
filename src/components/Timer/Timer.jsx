import { useState } from "react";
import TimerModeSwitcher from "./TimerModeSwitcher";
import { TimerDisplay } from "./TimerDisplay";

function Timer() {
  const [currentMode, setCurrentMode] = useState("pomodoro");
  const handleChange = (mode) => {
    setCurrentMode(mode);
  };

  let timerCountdown;
  const toMilliseconds = (minutes) => {
    let milliseconds = minutes * 60 * 1000;
    return milliseconds;
  };
  if (currentMode === "pomodoro") {
    timerCountdown = toMilliseconds(25);
  } else if (currentMode === "short-break") {
    timerCountdown = toMilliseconds(5);
  } else {
    timerCountdown = toMilliseconds(10);
  }
  return (
    <div>
      <TimerModeSwitcher
        currentMode={currentMode}
        onChangeMode={handleChange}
      />
      <TimerDisplay timerCountdown={timerCountdown} />
    </div>
  );
}

export default Timer;
