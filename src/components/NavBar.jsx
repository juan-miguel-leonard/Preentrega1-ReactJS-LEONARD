import CartWidget from "./CartWidget";
import BacLogo from "./BacLogo";

const NavBar = () => {
    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-md-1">
                    <BacLogo tamanio={100} />
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Productos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Amortiguadores</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Escapes</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Frenos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark fs-5" href="#">Neumaticos</a>
                        </li>
                    </ul>
                </div>
                <div className="col-md-1 d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar;