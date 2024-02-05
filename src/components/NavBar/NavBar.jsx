import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";
const NavBar = () => {
 

  return (
    <header>
      <span
        className={`${styles.logo} flex justify-start items-center font-semibold text-2xl text-emerald-400`}
      >
        LeoPage
      </span>

      <div className="flex gap-7 justify-center items-center font-semibold">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/products">Productos</NavLink>
        <NavLink to="/about">Servicios</NavLink>
      </div>
    </header>
  );
};

export default NavBar;
