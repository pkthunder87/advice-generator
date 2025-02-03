import AppLayout from "./components/AppLayout";
import Attribution from "./components/Attribution";
import "./sass/main.scss";

function App() {
  return (
    <AppLayout>
      <div className="main-title">Advice Generator</div>
      <Attribution />
    </AppLayout>
  );
}

export default App;
