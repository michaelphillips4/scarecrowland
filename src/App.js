import Home from './parts/Home';
import { Routes, Route, HashRouter} from "react-router-dom"; 
import Gallery from './parts/Gallery';
import Layout from './layout'; 
import PageNotFound from './PageNotFound'; 

function App() {
  return (
   
    <HashRouter>
  
    <Routes >
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="Gallery/:gallery/:index"  element={<Gallery />}/>
        <Route path="*" element={<PageNotFound />} /> 
      </Route>
    </Routes>

  </HashRouter>

  );
}

export default App;
