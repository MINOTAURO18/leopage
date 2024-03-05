import styles from "./home.module.css";
import { NavLink } from "react-router-dom";
import phones from "../../assets/phones.webp";
import iphone from "../../assets/iphone.webp";
import diademas from "../../assets/diademas.webp";
import airpots from "../../assets/airpots.webp";
import tablet from "../../assets/tablet.webp";
import laptop from "../../assets/laptop.webp";
import box from "../../assets/box.svg";
import dollar from "../../assets/dollar.svg";
import plus from "../../assets/plus.svg";
import smartwach from "../../assets/Smartwach.webp";
import what from "../../assets/what.svg";
import { useState, useEffect } from "react";

const Home = () => {
  const [countdownDate] = useState(new Date("2024-04-31T00:00:00").getTime());
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [countdownDate]);

  return (
    <main className={`${styles.home} text-zinc-900 relative`}>
      <section
        className={`${styles.sectionOne}  flex items-center w-full px-8% min-h-screen `}
      >
        <article className={` ${styles.article}  flex flex-col gap-6`}>
          <span className="text-emerald-400 font-semibold">
          Tecnología fuera de este mundo!
          </span>
          <h1 className="text-5xl font-bold max-w-2xl  ">
          Potenciando tu mañana{" "}
            <span className="text-emerald-400">con la tecnología de </span>{" "}
            vanguardia de hoy.
          </h1>
          <p className="max-w-xl">
          Descubre la excelencia en reparación de celulares y accesorios en LEOCELL Expertos en soluciones rápidas y productos de calidad para mantener tu dispositivo en su mejor forma. ¡Visítanos hoy para experimentar la diferencia
          </p>
          <NavLink
            to="/products"
            className="w-28 h-10 border bg-emerald-400 rounded-md flex justify-center items-center font-bold hover:bg-emerald-500 transition"
          >
            Comprar
          </NavLink>
        </article>
        <div
          className={`${styles.phones} flex h-8 w-2/5 justify-center items-center animate-bounce animate-infinite animate-duration-[2500ms]  z-30`}
        >
          <img className={`w-96 z-10`} src={phones} alt="#" />
        </div>
        <span className={`${styles.deco}`}></span>
      </section>

      <section
        className={`${styles.sectionTwo}  flex flex-wrap gap-4 items-center w-full px-8% py-7`}
      >
        <h2 className="text-2xl text-emerald-400 font-semibold">
        Categorías Populares
        </h2>
        <article className="w-full h-auto flex justify-between items-center gap-3 flex-wrap">
          <div className="w-32 hover:animate-jump animate-once ">
            <img src={iphone} alt="" />
          </div>
          <div className="w-32 hover:animate-jump animate-once">
            <img src={diademas} alt="" />
          </div>
          <div className="w-32 hover:animate-jump animate-once">
            <img src={laptop} alt="" />
          </div>
          <div className="w-32 hover:animate-jump animate-once">
            <img src={airpots} alt="" />
          </div>
          <div className="w-32 hover:animate-jump animate-once">
            <img src={smartwach} alt="" />
          </div>
          <div className="w-32 hover:animate-jump animate-once">
            <img src={tablet} alt="" />
          </div>
        </article>
      </section>

      <section
        className={`${styles.sectionThree} px-8% py-7 flex flex-wrap justify-center items-center gap-14`}
      >
        <article className="flex flex-col gap-7 justify-center items-center">
          <span className="font-semibold text-emerald-400">Apúrate!</span>
          <span className="text-5xl text-white font-semibold text-center max-w-lg">
          Hasta un 30% de descuento ¡Échale un vistazo!
          </span>
          <span className="flex gap-5 font-semibold">
            <div className="w-16 h-14 bg-white rounded-md flex flex-col justify-center items-center ">
              {timeLeft.days} <span>Días</span>
            </div>
            <div className="w-16 h-14 bg-white rounded-md flex flex-col justify-center items-center">
              {timeLeft.hours} <span>Horas</span>
            </div>
            <div className="w-16 h-14 bg-white rounded-md flex flex-col justify-center items-center">
              {timeLeft.minutes} <span>Min</span>
            </div>
            <div className="w-16 h-14 bg-white rounded-md flex flex-col justify-center items-center">
              {timeLeft.seconds} <span>Seg</span>
            </div>
          </span>

          <NavLink
            to="/detail/5"
            className="w-28 h-10 border bg-emerald-400 rounded-md flex justify-center items-center font-semibold  hover:bg-emerald-500 transition"
          >
            Shop Now
          </NavLink>
        </article>
        <div>
          <img src={laptop} alt="laptop" />
        </div>
      </section>

      <section
        className={`${styles.sectionFourt} px-8% py-7 flex justify-center items-center gap-10 flex-wrap`}
      >
        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img className="w-10" src={dollar} alt="" />
          <h3 className="font-semibold text-emerald-400">Free Delivery</h3>
          <p>free shipping to all of Colombia maximum 3 products</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img className="w-12" src={box} alt="" />
          <h3 className="font-semibold text-emerald-400">
            Paid monthly at 1% APR
          </h3>
          <p>free shipping to all of Colombia maximum 3 products</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 text-center">
          <img className="w-10" src={plus} alt="" />
          <h3 className="font-semibold text-emerald-400">Personalize it</h3>
          <p>free shipping to all of Colombia maximum 3 products</p>
        </div>
      </section>
      <span className={styles.item}></span>
      <span className={styles.item2}></span>
      <span className={styles.item3}></span>
      <span className={styles.item4}></span>
      <a href="#">
      <img src={what} className={styles.whatsapp} alt="" />
      </a>
    </main>
  );
};

export default Home;
