import { Coordinates, CalculationMethod, PrayerTimes } from "adhan";

export async function getPrayerTimesFromIP() {
  const res = await fetch("http://ip-api.com/json");
  const data = await res.json();
  const coordinates = new Coordinates(data.lat, data.lon);
  const params = CalculationMethod.NorthAmerica();
  const date = new Date();
  const prayerTimes = new PrayerTimes(coordinates, date, params);

  function formatPrayerTimes(times) {
    const options = {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };

    const formatted = {};
    for (const [name, time] of Object.entries(times)) {
      formatted[name] = new Date(time).toLocaleTimeString("en-US", options);
    }

    return formatted;
  }

  const { fajr, sunrise, dhuhr, asr, sunset, maghrib, isha } = prayerTimes;

  const formatted = formatPrayerTimes({
    fajr,
    sunrise,
    dhuhr,
    asr,
    sunset,
    maghrib,
    isha,
  });

  return formatted;
}
