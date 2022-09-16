import TablaContainer from "./components/TablaContainer";
import Filtros from "./components/Filtros";
import Header from "./components/Header";
import { DataProvider } from "./context/DataProvider";

function App() {
  return (
    <div>
      <DataProvider>
        <Header />
        <Filtros/>
        <TablaContainer/>
      </DataProvider>
      
    </div>
  );
}

export default App;
