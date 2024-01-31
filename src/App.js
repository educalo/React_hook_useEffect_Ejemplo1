import React, {useState, useEffect} from "react";
import logo from './logo.svg';
import './App.css';

function App() {

  //hook para controlar los cambios de estado de los componentes
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

//useEffect es una funcion que se le pasa como parametro otra función
//entre corchetes las variables que detecte cuando se acualiza para que vuelva a ejecutarse
//cuando contar se actualice este useEffect se vuelva a ejecutar
//en el console.log aparece cada vez que cambia contador
  useEffect (() =>{
    console.log("Total:" + contar)
  }, [contar])

  const encenderApagar = () =>{
    setStateCar(!stateCar);
    setContar(contar+1);
  }


  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h3> El coche esta:{stateCar ?"Encendido": "Apagado"} </h3>
          <h4>Clicks: {contar}</h4>
          <button onClick={encenderApagar}>Encender/Apagar</button>
        </header>
    </div>
  );
}

export default App;
