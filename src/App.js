import "./App.css";
import TableAntDesign from "./TableAntDesign";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="app-header">
        <Header />
      </div>
      <div className="table">
        <TableAntDesign />
      </div>
      <Footer />
    </div>
  );
}

export default App;
