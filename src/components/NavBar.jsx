import '../styles.css';
import CartWidget from './CartWidget';

const NavBar = ({logo}) => {
    return(
<header className="header-special">
    <div>
        <a href="#">
            <div className="header-logo">
                <img src={logo} alt="logo" height="90px"/>
            </div>
        </a>
        <span className="title-brand">NBA Rebound</span>
    </div>

      <nav className="nav-special">
          <ul className="nav-ul">
              <a href="#">INICIO</a>
              <a href="#">SOBRE NOSOTROS</a>
              <a href="#">CENTRO DE AYUDA</a>
              <a href="#">PRODUCTOS</a>
          </ul>
      </nav>
    <CartWidget/>
  </header>
    )
}

export default NavBar;