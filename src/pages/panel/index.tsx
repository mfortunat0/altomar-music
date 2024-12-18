import style from "./index.module.css";
import profileImage from "../../assets/user.jpg";
import { useState } from "react";
import {
  FaBullhorn,
  FaCalendarDays,
  FaHouse,
  FaUserLargeSlash,
  FaX,
} from "react-icons/fa6";
import { GiMusicalNotes } from "react-icons/gi";
import { Home } from "../home";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { Escalas } from "../escalas";
import { Repertorio } from "../repertorio";

export function Panel() {
  const [activeScreen, setActiveScreen] = useState("home");
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <main className={style.panelContainer}>
      {activeScreen === "home" && <Home setShowSideBar={setShowSideBar} />}
      {activeScreen === "escalas" && (
        <Escalas setShowSideBar={setShowSideBar} />
      )}
      {activeScreen === "repertorio" && (
        <Repertorio setShowSideBar={setShowSideBar} />
      )}
      {showSideBar && (
        <nav className={style.sideBar}>
          <div>
            <FaX className="backArrow" onClick={() => setShowSideBar(false)} />
            <img src={profileImage} alt="" />
            <h3>Matheus fortunato</h3>
          </div>
          <ul>
            <li>
              <FaBullhorn />
              <p>Avisos</p>
            </li>
            <li>
              <FaUserLargeSlash />
              <p>Indisponibiliades</p>
            </li>
          </ul>
        </nav>
      )}
      <footer className={style.panelFooter}>
        <FaHouse
          className={activeScreen === "home" ? style.active : ""}
          onClick={() => setActiveScreen("home")}
        />
        <FaCalendarDays
          className={activeScreen === "escalas" ? style.active : ""}
          onClick={() => setActiveScreen("escalas")}
        />
        <GiMusicalNotes
          className={activeScreen === "repertorio" ? style.active : ""}
          onClick={() => setActiveScreen("repertorio")}
        />
        <IoChatbubbleEllipses
          className={activeScreen === "chat" ? style.active : ""}
          onClick={() => setActiveScreen("chat")}
        />
      </footer>
    </main>
  );
}
