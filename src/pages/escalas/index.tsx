import { IoMdMusicalNote } from "react-icons/io";
import style from "./index.module.css";
import userImage from "../../assets/user.jpg";
import {
  FaAlignJustify,
  FaHandshakeSimple,
  FaSwatchbook,
} from "react-icons/fa6";
import { useState } from "react";

interface EscalasProps {
  setShowSideBar: (state: boolean) => void;
}

export function Escalas({ setShowSideBar }: EscalasProps) {
  const [activeButton, setActiveButton] = useState("proximas");

  return (
    <section className={style.escalasContainer}>
      <header>
        <FaAlignJustify onClick={() => setShowSideBar(true)} />
        <h2>Minhas Escalas</h2>
      </header>
      <nav>
        <button
          className={activeButton === "proximas" ? style.activeButton : ""}
          onClick={() => setActiveButton("proximas")}
        >
          Proximas
        </button>
        <button
          className={activeButton === "anteriores" ? style.activeButton : ""}
          onClick={() => setActiveButton("anteriores")}
        >
          Anteriores
        </button>
      </nav>
      <div className={style.cardContainerEscalas}>
        <span className={style.card}>
          <footer>
            <h3>Equipe 01/12</h3>
            <p>08:00</p>
            <div>
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
            </div>
            <div>
              <p>
                <IoMdMusicalNote />
                2/4
              </p>
              <p>
                <FaHandshakeSimple />6
              </p>
              <p>
                <FaSwatchbook />1
              </p>
            </div>
          </footer>
        </span>
        <span className={style.card}>
          <footer>
            <h3>Equipe 01/12</h3>
            <p>08:00</p>
            <div>
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
            </div>
            <div>
              <p>
                <IoMdMusicalNote />
                2/4
              </p>
              <p>
                <FaHandshakeSimple />6
              </p>
              <p>
                <FaSwatchbook />1
              </p>
            </div>
          </footer>
        </span>
        <span className={style.card}>
          <footer>
            <h3>Equipe 01/12</h3>
            <p>08:00</p>
            <div>
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
            </div>
            <div>
              <p>
                <IoMdMusicalNote />
                2/4
              </p>
              <p>
                <FaHandshakeSimple />6
              </p>
              <p>
                <FaSwatchbook />1
              </p>
            </div>
          </footer>
        </span>
        <span className={style.card}>
          <footer>
            <h3>Equipe 01/12</h3>
            <p>08:00</p>
            <div>
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
            </div>
            <div>
              <p>
                <IoMdMusicalNote />
                2/4
              </p>
              <p>
                <FaHandshakeSimple />6
              </p>
              <p>
                <FaSwatchbook />1
              </p>
            </div>
          </footer>
        </span>
        <span className={style.card}>
          <footer>
            <h3>Equipe 01/12</h3>
            <p>08:00</p>
            <div>
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
            </div>
            <div>
              <p>
                <IoMdMusicalNote />
                2/4
              </p>
              <p>
                <FaHandshakeSimple />6
              </p>
              <p>
                <FaSwatchbook />1
              </p>
            </div>
          </footer>
        </span>
        <span className={style.card}>
          <footer>
            <h3>Equipe 01/12</h3>
            <p>08:00</p>
            <div>
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
              <img src={userImage} alt="" />
            </div>
            <div>
              <p>
                <IoMdMusicalNote />
                2/4
              </p>
              <p>
                <FaHandshakeSimple />6
              </p>
              <p>
                <FaSwatchbook />1
              </p>
            </div>
          </footer>
        </span>
      </div>
    </section>
  );
}
