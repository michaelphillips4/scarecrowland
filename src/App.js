import './App.css';
import GalleryList from './parts/GallerysList';
import Header from './parts/Header';
import ImagesList from './parts/ImagesList';
import History from './parts/History';
import About from './parts/About';
import Barnie from './parts/Barnie';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <About />
      </div>
      <ImagesList />
      <div className="container">
        <GalleryList />
      </div>
      <div className="container">
        <History />
      </div>
      <div className="container">
        <Barnie />
      </div>
      <br />
      <span>&copy; scarecrowland 2023</span>
      <br /> <br /> <br />
    </>
  );
}

export default App;
