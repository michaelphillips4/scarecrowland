import './Header.css';

const iconStyle = { verticalAlign: "middle" };


function Header() {
  return (
    <header>
      <h1>Scarecrowland</h1>

      <div className="flex-container">
        <span className="flex-item">   <i className="material-icons" style={iconStyle} >local_phone</i> tel : 07980 013795&nbsp;&nbsp;
        </span>
        <span className="flex-item"> <i className="material-icons" style={iconStyle}>email</i> email : <a href="mailto:scarecrowland@yahoo.com">scarecrowland@yahoo.com</a></span>
      </div>



    </header>
  )
};

export default Header;