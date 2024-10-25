import { useState } from "react";
import TimerModeSwitcher from "./TimerModeSwitcher";
import { TimerDisplay } from "./TimerDisplay";

function Timer() {
  const [currentMode, setCurrentMode] = useState("pomodoro");
  const handleChange = (mode) => {
    setCurrentMode(mode);
  };
  return (
    <div>
      <TimerModeSwitcher currentMode={currentMode} onChangeMode={handleChange} />
      <TimerDisplay />
    </div>
  );
}

export default Timer;
