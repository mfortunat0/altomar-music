import { ChangeEvent, FormEvent, useState } from "react";
import { FaAngleLeft } from "react-icons/fa6";
import style from "./index.module.css";
import { Link } from "react-router-dom";

export function Cadastrar() {
  const [inputNome, setInputNome] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputDate, setInputDate] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputPasswordSecond, setInputPasswordSecond] = useState("");

  const onChangeInputNome = (event: ChangeEvent<HTMLInputElement>) => {
    setInputNome(event.target.value);
  };
  const onChangeInputEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setInputEmail(event.target.value);
  };

  const onChangeInputDate = (event: ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
  };

  const onChangeInputPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };

  const onChangeInputPasswordSecond = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setInputPasswordSecond(event.target.value);
  };

  const formatDate = (date: string) => {
    const oldDate = new Date(date);
    const day = (oldDate.getDate() + 1).toString().padStart(2, "0");
    const month = (oldDate.getMonth() + 1).toString().padStart(2, "0");
    const formated = `${day}/${month}/${oldDate.getFullYear()}`;
    return formated;
  };

  return (
    <section className={style.cadastrarContainer}>
      <div>
        <Link to="/login">
          <FaAngleLeft className="backArrow" />
        </Link>
      </div>
      <h2>DADOS PARA CADASTRO</h2>
      <form onSubmit={(event: FormEvent) => event.preventDefault()}>
        <input
          type="text"
          placeholder="👤 Nome e Sobrenome"
          value={inputNome}
          onChange={onChangeInputNome}
        />
        <input
          type="email"
          placeholder="✉️ Email"
          value={inputEmail}
          onChange={onChangeInputEmail}
        />
        <label
          htmlFor="calendar"
          onClick={() => {
            const input =
              document.querySelector<HTMLInputElement>('input[type="date"]');
            if (input) input.showPicker();
          }}
        >
          {inputDate ? formatDate(inputDate) : "Data de nascimento"}
        </label>
        <input
          type="date"
          id="calendar"
          name="calendar"
          placeholder="Data de nascimento"
          onChange={onChangeInputDate}
        />
        <input
          type="password"
          placeholder="🔒 Senha"
          value={inputPassword}
          onChange={onChangeInputPassword}
        />
        <input
          type="password"
          placeholder="🔒 Confirmar Senha"
          value={inputPasswordSecond}
          onChange={onChangeInputPasswordSecond}
        />
        <button>REGISTRAR</button>
      </form>
    </section>
  );
}
