import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Weather App</h1>
        <Weather default="New York" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/Narges-abbasii"
            target="_blank"
            rel="noreferrer"
          >
            Narges Abbasi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Narges-abbasii/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced in Github
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-rouge-six.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Vercel
          </a>
        </footer>
      </div>
    </div>
  );
}
