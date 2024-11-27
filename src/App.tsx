import { Route, Routes } from "react-router-dom";
import { Welcome } from "./pages/welcome";
import { Login } from "./pages/login";
import { Cadastrar } from "./pages/cadastrar";
import { Panel } from "./pages/panel";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Welcome />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/panel" element={<Panel />} />
      </Routes>
    </>
  );
}

export default App;
