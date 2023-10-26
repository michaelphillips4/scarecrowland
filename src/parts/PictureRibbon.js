const PictureRibbon = () => {

  const styleWidth = {"height":"600px"};

  return (
  <div className="card shadow mt-2 p-2">
    <div className="row text-center">
      <div className="col-lg-4">
      <img src="http://www.scarecrowland.co.uk/Pictures/200310scarecrow003.jpg" className="img-fluid p-2 shadow rounded" style={styleWidth} alt="Pumpkin Man" />
    </div>
    <div className="col-lg-4">
      <img src="http://www.scarecrowland.co.uk/Pictures/gal34/P1020608 (Small).JPG" className="img-fluid p-2 shadow rounded " style={styleWidth} alt="Scarecrow in a shop" />
    </div>
    <div className="col-lg-4">
      <img src="http://www.scarecrowland.co.uk/Pictures/gal29/tIMG_0962.jpg" className="img-fluid p-2 shadow rounded " style={styleWidth} alt="peppe" />
    </div>
  </div>
  </div>)
}


export default PictureRibbon;