import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./pages/Auth";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
