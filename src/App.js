import './App.css';
import Home from './parts/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Gallery from './parts/Gallery';
import Layout from './layout';

function App() {
  return (
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="Gallery" element={<Gallery />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
