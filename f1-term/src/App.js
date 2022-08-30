import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Help } from './pages/Help/Help';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
