import { FormEvent } from "react";
import style from "./index.module.css";
import headerImage from "../../assets/header.png";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <section className={style.loginContainer}>
      <img src={headerImage} alt="" />
      <form onSubmit={(event: FormEvent) => event.preventDefault()}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="*********" />
        <a href="#">Esqueceu a senha?</a>
        <Link to="/panel">
          <button>Entrar</button>
        </Link>
      </form>
      <div>
        <p>
          Não possui login? <Link to={"/cadastrar"}> Cadastre-se</Link>
        </p>
      </div>
    </section>
  );
}
