import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import Charts from "./components/Charts";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

function App() {

  return (

    <div className="
    min-h-screen
    bg-gray-100
    text-black
    ">

      <Header />

      <SummaryCards />

      <Charts />

      <Transactions />

      <Insights />

    </div>

  );

}

export default App;