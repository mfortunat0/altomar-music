import {
  FaAlignJustify,
  FaHandshakeSimple,
  FaMessage,
  FaPen,
  FaRegCalendar,
  FaRegUser,
  FaSquareCheck,
  FaSwatchbook,
} from "react-icons/fa6";
import style from "./index.module.css";
import heroImage from "../../assets/header.png";
import { IoMdMusicalNote } from "react-icons/io";

export function Home() {
  return (
    <section className={style.homeContainer}>
      <header>
        <FaAlignJustify />
        <h1>Altomar Music</h1>
      </header>
      <section>
        <header>
          <h2>Ministerios</h2>
          <p>Adicionar</p>
        </header>
        <div className={style.cardContainerMinisterios}>
          <span className={style.card}>
            <img src={heroImage} alt="" />
            <div className={style.cardFooter}>
              <h3>Altomar music</h3>
              <div>
                <p>
                  <FaRegCalendar /> 1/1
                </p>
                <p>
                  <IoMdMusicalNote /> 6
                </p>
                <p>
                  <FaRegUser /> 9
                </p>
                <p>
                  <FaSquareCheck />
                </p>
              </div>
            </div>
          </span>
          <span className={style.card}>
            <img src={heroImage} alt="" />
            <div className={style.cardFooter}>
              <h3>Altomar music</h3>
              <div>
                <p>
                  <FaRegCalendar /> 1/1
                </p>
                <p>
                  <IoMdMusicalNote /> 6
                </p>
                <p>
                  <FaRegUser /> 9
                </p>
                <p>
                  <FaSquareCheck />
                </p>
              </div>
            </div>
          </span>
          <span className={style.card}>
            <img src={heroImage} alt="" />
            <div className={style.cardFooter}>
              <h3>Altomar music</h3>
              <div>
                <p>
                  <FaRegCalendar /> 1/1
                </p>
                <p>
                  <IoMdMusicalNote /> 6
                </p>
                <p>
                  <FaRegUser /> 9
                </p>
                <p>
                  <FaSquareCheck />
                </p>
              </div>
            </div>
          </span>
        </div>
      </section>
      <section>
        <header>
          <h2>Minhas escalas</h2>
          <p>Ver todas</p>
        </header>
        <div className={style.cardContainerEscalas}>
          <span className={style.card}>
            <header>
              <p>1</p>
              <p>Dez</p>
              <p>Dom</p>
              <p>08:00/</p>
            </header>
            <footer>
              <h3>Equipe 01/12</h3>
              <p>daqui a 4 dias</p>
              <div>
                <IoMdMusicalNote />
                <FaHandshakeSimple />
                <FaSwatchbook />
                <FaMessage />
                <FaPen />
              </div>
            </footer>
          </span>
        </div>
      </section>
      <section>
        <header>
          <h2>Aniversariantes</h2>
          <p>Ver todos</p>
        </header>
      </section>
    </section>
  );
}
