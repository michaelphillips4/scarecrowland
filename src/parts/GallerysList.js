import './GallerysList.css';
import data from "../galleries-data.json";
import GallerySection from './GallerySection';

const GalleryList = ()=> {
  return (
      <div className="card shadow p-2 ">
      <h5 className="text-center">Gallery's</h5>
      
      <GallerySection name = "Scarecrows" gallery = {data.Scarecrows} />
     
      <a href="http://regentsparkallotmentgarden.blogspot.co.uk/2011/10/harvest-festival-2011-part-2-Ceramics.html">
          Harvest festival 2011
      </a> 

       <hr />
       <GallerySection name = "Ceramics" gallery = {data.Ceramics} />
       <hr />
       <GallerySection name = "Hats" gallery = {data.Hats} />


       {/*  <a href="Cgal2.html">
          Ceramics 2003 -2004
        </a>
        <a href="Cgal1.html">
          Ceramics 2005
        </a>
        <a href="gal24.html">
          Ceramics Summer 2005
        </a>
        <a href="gal25.html">
          Ceramics Summer 2006
        </a>
        <a href="http://www.scarecrowland.co.uk/Pictures/Galc5/index.html">
          Ceramics 2011
        </a>
  <a href="hatgal1.html">  Hats New Range in Spring 2011</a> */}

      </div>)
};

export default GalleryList;