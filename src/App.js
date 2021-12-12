import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="card">
            <h1>Weather App</h1>
            <hr />
            <div className="card-disp">
              <Weather />
            </div>
          </div>
          <Footer />
        </header>
      </div>
    </div>
  );
}

export default App;
