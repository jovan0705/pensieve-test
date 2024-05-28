import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import DeviceDetail from "./views/DeviceDetail";
import DeviceList from "./views/DeviceList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DeviceList />} />
        <Route path="/:id" element={<DeviceDetail />} />
      </Routes>
    </div>
  );
}

export default App;
