import "./App.css";
import Collect from "./Collect";
import img from "./img/woliul-hasan-atNNDyP-3hE-unsplash.jpg";

function App() {
  return (
    <div className="App">
      <img src={img} />
      <Collect />
    </div>
  );
}

export default App;
