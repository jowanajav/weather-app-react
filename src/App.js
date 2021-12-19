import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card">
          <h1 className="mt-3 mb-3">Weather App</h1>
          <Weather defaultCity="Tokyo" />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
