import './GallerysList.css';
import data from "../galleries-data.json";
import GallerySection from './GallerySection';

function GalleryList() {
  return (
  
         <ul  className="dropdown-menu" aria-labelledby="nav-dropdown">
      <GallerySection name="Scarecrows" gallery={data.Scarecrows} />
     <li><a className="dropdown-item" href="http://regentsparkallotmentgarden.blogspot.co.uk/2011/10/harvest-festival-2011-part-2-Ceramics.html">  Harvest festival 2011
      </a></li> 
           
     
      <GallerySection name="Ceramics" gallery={data.Ceramics} />
     
       <GallerySection name="Hats" gallery={data.Hats} />
      </ul>
    );
}

export default GalleryList;