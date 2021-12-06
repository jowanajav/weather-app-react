import "./App.css";
import Search from "./Search";
import City from "./City";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <div className="card">
            <h1>Weather App</h1>
            <Search />
            <hr />
            <div className="card-disp">
              <City />
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
