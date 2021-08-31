import logo from './logo.svg';
import './App.css';

import Devs from "./components/Developers"

function App() {

  const ailton = {nome: "Ailton", idade: 69, pais: "Brasil"}
  const christian = {nome: "Christian", idade: 23, pais: "Brasil"}
  const julia = {nome: "Júlia", idade: 21, pais: "Brasil"}
   
  return (

    <div>

      <p>
        <Devs
         name = {ailton.nome}
         age = {ailton.idade}
         country = {ailton.pais}
         />
      </p>

      <p>
        <Devs 
          name = {christian.nome} 
          age = {christian.idade} 
          country = {ailton.pais}  
        />
      </p>

      <p>
        <Devs 
        name = {julia.nome}
        age = {julia.idade}
        country = {julia.pais}
        />
      </p>

    </div>
  );
}

export default App;


