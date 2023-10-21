import "@styles/App.scss";
import Geolocation from "@components/geolocation/Geolocation";

const App = () => {
  return (
    <div className="App">
      <h1>Geo Location</h1>
      <Geolocation />
    </div>
  );
};

export default App;
