import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import style from "./index.module.css";

interface RepertorioProps {
  setShowSideBar: (state: boolean) => void;
}

export function Repertorio({ setShowSideBar }: RepertorioProps) {
  const [activeButton, setActiveButton] = useState("storm");
  return (
    <section className={style.repertorioContainer}>
      <header>
        <FaAlignJustify onClick={() => setShowSideBar(true)} />
        <h2>Repertorio</h2>
      </header>
      <nav>
        <button
          className={activeButton === "storm" ? style.activeStorm : ""}
          onClick={() => setActiveButton("storm")}
        >
          Storm (5)
        </button>
        <button
          className={
            activeButton === "lighthouse" ? style.activeLightHouse : ""
          }
          onClick={() => setActiveButton("lighthouse")}
        >
          LightHouse (5)
        </button>
        <button
          className={activeButton === "altomar" ? style.activeAltomar : ""}
          onClick={() => setActiveButton("altomar")}
        >
          Altomar (6)
        </button>
      </nav>
      <footer className={style.cardsContainer}>
        <div className={style.card}>
          <img
            src="https://i.scdn.co/image/ab67616d0000b2737f1c92b77e3cbdf2a8215320"
            alt=""
          />
          <div>
            <h3>Brilhante Rei</h3>
            <p>Altomonte</p>
            <span>Louvor, Oferta, Tom: C</span>
          </div>
        </div>
        <div className={style.card}>
          <img
            src="https://i.scdn.co/image/ab67616d0000b27309ddda4586a4faa6a2f1bddb"
            alt=""
          />
          <div>
            <h3>Emaus</h3>
            <p>Morada</p>
            <span>Louvor, Ceia, Tom: C</span>
          </div>
        </div>
        <div className={style.card}>
          <img
            src="https://i.scdn.co/image/ab67616d0000b273608e082d189065e3acbe634a"
            alt=""
          />
          <div>
            <h3>Isaias 9</h3>
            <p>Dunamis Music, Rodolfo Abrantes</p>
            <span>Louvor, Tom: E</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
