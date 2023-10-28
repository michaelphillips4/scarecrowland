import GalleryList from './GalleryList';
function Navigation() {

  
    return (
        <nav>
         
            <div className="dropdown">
                <div className="text-center">
                    <button className="btn btn-outline-dark dropdown-toggle m-2" type="button" id="nav-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-list"></i> Galleries
                    </button>
                    <GalleryList />
                </div>
            </div>
        </nav>
    );
}
export default Navigation;