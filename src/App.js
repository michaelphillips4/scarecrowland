import './App.css';
import Home from './parts/Home';
import Header from "./parts/Header"
/* import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import Gallery from './parts/Gallery';
import Layout from './layout';*/

function App() {
  return (
  <>
  <Header />
  <Home />
  <br />
<span>&copy; scarecrowland 2023</span>
<br /> <br /> <br />
  </>
/*     <BrowserRouter>
    <Routes basename={process.env.PUBLIC_URL}>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
        <Route path="Gallery" element={<Gallery />} />
      </Route>
    </Routes>
  </BrowserRouter> */

  );
}

export default App;
