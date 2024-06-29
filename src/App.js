import "./App.css";
import GridTable from "./components/GridTable";
import { GridProvider } from "./context/grid";

function App() {
  return (
    <div className="App">
      <GridProvider>
        <GridTable />
      </GridProvider>
    </div>
  );
}

export default App;
