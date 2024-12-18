import style from "./index.module.css";
import headerImage from "../../assets/header.png";
import { Link } from "react-router-dom";

export function Welcome() {
  return (
    <section className={style.welcomeContainer}>
      <img src={headerImage} alt="" />
      <h2>BEM-VINDO AO ALTOMAR MUSIC</h2>
      <p>
        <span>"</span>Esses viram as obras do SENHOR, seus milagres em alto-mar.
        <span>"</span>
      </p>
      <div>
        <Link to={"/login"}>
          <button>ENTRAR</button>
        </Link>
        <Link to={"/cadastrar"}>
          <button>CADASTRE-SE</button>
        </Link>
      </div>
    </section>
  );
}
