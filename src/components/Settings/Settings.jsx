import { useState } from "react";
function Settings({ pomodoro, shortBreak, longBreak }) {
  const [pomodoroValue, setPomodoroValue] = useState(pomodoro);
  const [shortBreakValue, setShortBreakValue] = useState(shortBreak);
  const [longBreakValue, setLongBreakValue] = useState(longBreak);

  const handleForm = (e) => {
    e.preventDefault();
    console.log(pomodoroValue, shortBreakValue, longBreakValue);
  };
  return (
    <section>
      <h2>Time (minutes)</h2>
      <form onSubmit={handleForm}>
        <div>
          <label htmlFor="pomodoro">pomodoro</label>
          <input
            type="number"
            id="pomodoro"
            value={pomodoroValue}
            onChange={(e) => setPomodoroValue(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="short-break">short break</label>
          <input type="number" id="short-break" value={shortBreakValue} onChange={(e) => setShortBreakValue(e.target.value)}/>
        </div>
        <div>
          <label htmlFor="long-break">long break</label>
          <input type="number" id="long-break" value={longBreakValue} onChange={(e) => setLongBreakValue(e.target.value)}/>
        </div>
        <button type="submit">Apply</button>
      </form>
    </section>
  );
}
export default Settings;