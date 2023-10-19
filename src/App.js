import './App.css';
import Home from './parts/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom"; 
import Gallery from './parts/Gallery';
import Layout from './layout'; 
import PageNotFound from './PageNotFound'; 

function App() {
  return (
   
    <BrowserRouter>
  
    <Routes >
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="Gallery/:index"  element={<Gallery />}/>
        <Route path="*" element={<PageNotFound />} /> 
      </Route>
    </Routes>

  </BrowserRouter>

  );
}

export default App;
