import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import Contatos from "./pages/Contatos/Contatos";
import Login from "./pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Login />
      <Cadastro />
      <Contatos />
    </div>
  );
}

export default App;
