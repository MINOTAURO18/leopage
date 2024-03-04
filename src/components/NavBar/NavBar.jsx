import { NavLink } from "react-router-dom";
import styles from "./navBar.module.css";
import bag from '../../assets/bag.svg'
import face from '../../assets/face.svg'
import insta from '../../assets/insta.svg'
import what from '../../assets/what2.svg'
const NavBar = () => {
 

  return (
    <header className="flex">
      <span
        className={`${styles.logo} flex justify-start items-center font-semibold text-2xl text-emerald-400`}
      >
        LeoCell
      </span>

      <div className="flex gap-7 justify-center items-center font-semibold">
        <NavLink to="/">Inicio</NavLink>
        <NavLink to="/products">Productos</NavLink>
        <NavLink to="/about">Servicios</NavLink>
      </div>

      <div className="flex gap-3">
        <img className="w-9" src={face} alt="" />
        <img className="w-9" src={insta} alt="" />
        <img className="w-9" src={what} alt="" />
      </div>
    </header>
  );
};

export default NavBar;
