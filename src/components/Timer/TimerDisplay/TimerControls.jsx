function TimerControls({ isPaused, onStart, onPause }) {
  return (
    <div>
      {isPaused ? (
        <button onClick={onStart}>start</button>
      ) : (
        <button onClick={onPause}>pause</button>
      )}
    </div>
  );
}
export default TimerControls;
