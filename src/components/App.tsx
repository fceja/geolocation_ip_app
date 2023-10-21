import "../styles/App.css";
import Geolocation from "./geolocation/Geolocation";

const App = () => {
  return (
    <div className="App">
      <h1>Geo Location</h1>
      <Geolocation />
    </div>
  );
};

export default App;
