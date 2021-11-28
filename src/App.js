import "./App.css";
import Search from "./Search";
import City from "./City";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <h1>Weather App</h1>
          <Search />
          <hr />
          <div className="card-disp">
            <City />
            <Forecast />
          </div>
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
