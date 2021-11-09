import "./App.css";
import Cadastro from "./pages/Cadastro/Cadastro";
import Contatos from "./pages/Contatos/Contatos";
import Login from "./pages/Login/Login";
import CustomAlert from "./Componentes/Alert";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import UseContext from "./Contexto/UseContext";
import useGlobal from "./Global/useGlobal";

function App() {
  const valuesProv = useGlobal();

  return (
    <UseContext.Provider value={valuesProv}>
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Route path="/" exact>
            <Login />
          </Route>
          <Route path="/sign-up">
            <Cadastro />
          </Route>
          <Route
            path="/home"
            render={() =>
              valuesProv.token ? <Contatos /> : <Redirect to="/" exact />
            }
          />
        </Router>
      </div>
      {valuesProv.exibAlert && <CustomAlert infos={valuesProv.exibAlert} />}
    </UseContext.Provider>
  );
}

export default App;
