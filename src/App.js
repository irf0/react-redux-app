import Navbar from "./Navbar";
import Shop from "./Shop";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h3>Withdraw/Deposit</h3>
      </div>
      <Shop />
    </div>
  );
}

export default App;
