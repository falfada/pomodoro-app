const TimerModeSwitcher = ({ currentMode, onChangeMode }) => {
  return (
    <nav>
      <button
        className={currentMode === "pomodoro" ? "active" : ""}
        onClick={() => onChangeMode("pomodoro")}
      >
        pomodoro
      </button>
      <button
        className={currentMode === "short-break" ? "active" : ""}
        onClick={() => onChangeMode("short-break")}
      >
        short break
      </button>
      <button
        className={currentMode === "long-break" ? "active" : ""}
        onClick={() => onChangeMode("long-break")}
      >
        long break
      </button>
    </nav>
  );
};

export default TimerModeSwitcher;
