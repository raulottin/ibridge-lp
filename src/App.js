import "./App.css";
import Beneficios from "./components/Beneficios/Beneficios";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Integracoes from "./components/Integracoes/Integracoes";
import Sistema from "./components/Sistema/Sistema";
import Clientes from "./components/Clientes/Clientes";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <Beneficios />
      <Integracoes />
      <Sistema />
      <Clientes />
      <Depoimentos />
      <Footer />
    </div>
  );
}

export default App;
