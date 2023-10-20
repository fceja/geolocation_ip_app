import GeolocationComponent from "./GeolocationComponent";
import IPInfo from "./IPInfo";

import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>Geolocation</h1>
      <GeolocationComponent />
      <IPInfo />
    </div>
  );
}

export default App;
