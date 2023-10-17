import './Header.css';

function Header() {
  return (
    <header className="text-center m-2">
      <h1 className="h1 display-3">Scarecrowland</h1>
      <div className="d-md-flex d-sm-inline justify-content-center text-body-secondary">
        <div className="">
          <i className="bi bi-telephone icon" ></i> tel : 07980 013795&nbsp;&nbsp;
        </div>
        <div className="">
          <i className="bi bi-envelope icon" ></i> email : <a href="mailto:scarecrowland@yahoo.com">scarecrowland@yahoo.com</a>
        </div>
      </div>
    </header>
  )
};

export default Header;