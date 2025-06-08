import { useState } from "react";
import reactLogo from "./assets/react.svg";
import PrayerTimes from "./PrayerTimes";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ad Free Prayer Times</h1>
      <PrayerTimes />
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          how many times have you prayed today? {count}
        </button>
      </div>
    </>
  );
}

export default App;
