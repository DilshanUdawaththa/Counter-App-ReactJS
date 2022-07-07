import Counters from "./components/counters";
import Movies from "./components/movies";
import NavBar from "./components/navbar";

function App() {
  return (
    <>
      <NavBar />
    <div className="container">
      <Counters />
      <Movies />
    </div>
    </>
  );
}

export default App;
