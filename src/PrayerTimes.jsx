import React, { useEffect, useState } from "react";
import { getPrayerTimesFromIP } from "../test";

export default function PrayerTimes() {
  const [prayerTimes, setPrayerTimes] = useState(null);

  useEffect(() => {
    getPrayerTimesFromIP().then(setPrayerTimes).catch(console.error);
  }, []);

  if (!prayerTimes) return <p>Loading prayer times...</p>;

  return (
    <div>
      <h2>Today's Prayer Times</h2>
      <ul>
        {Object.entries(prayerTimes).map(([name, time]) => (
          <div key={name}>
            {name.charAt(0).toUpperCase() + name.slice(1)}: {time}
          </div>
        ))}
      </ul>
    </div>
  );
}
