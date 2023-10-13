import GalleryList from './GallerysList';
import ImagesList from './ImagesList';
import History from './History';
import About from './About';
import Barnie from './Barnie';

const Home = () => {
    return (
        <>
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
        </>
    );
}

export default Home;