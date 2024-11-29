import { useState } from "react";
import { FaCalendarDays, FaHouse } from "react-icons/fa6";
import { GiMusicalNotes } from "react-icons/gi";
import { Home } from "../home";
import { IoChatbubbleEllipses } from "react-icons/io5";
import style from "./index.module.css";

export function Panel() {
  const [activeScreen, setActiveScreen] = useState("home");

  return (
    <main className={style.panelContainer}>
      {activeScreen === "home" && <Home />}
      <footer>
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
