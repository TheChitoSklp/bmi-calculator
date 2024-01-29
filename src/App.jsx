import "./App.css";
import { Details } from "./components/Details";
import { Limitations } from "./components/Limitations";
import { Means } from "./components/Means";
import { Tips } from "./components/Tips";

function App() {
  return (
    <div className="container-all">
      <Details />
      <Means />
      <Tips />
      <Limitations />
    </div>
  );
}

export default App;
