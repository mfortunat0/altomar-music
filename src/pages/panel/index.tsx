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
        <FaHouse onClick={() => setActiveScreen("home")} />
        <FaCalendarDays onClick={() => setActiveScreen("escalas")} />
        <GiMusicalNotes onClick={() => setActiveScreen("repertorio")} />
        <IoChatbubbleEllipses onClick={() => setActiveScreen("chat")} />
      </footer>
    </main>
  );
}
