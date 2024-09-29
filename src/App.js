import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolderOpen, faPlay, faChartBar } from '@fortawesome/free-solid-svg-icons';
import EditorComponent from './components/EditorComponent';
import ConsoleComponent from './components/ConsoleComponent';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [consoleOutput, setConsoleOutput] = useState('');

  // Simulación de la ejecución del código
  const handleExecute = () => {
    setLoading(true);
    setError(null);
    setConsoleOutput('');

    // Simulamos una ejecución con retraso
    setTimeout(() => {
      const isSuccess = Math.random() > 0.5; // Simulamos éxito o fallo aleatorio

      if (isSuccess) {
        setConsoleOutput('Ejecución completada correctamente.');
      } else {
        setError('Error en la ejecución del código.');
      }

      setLoading(false);
    }, 2000); // 2 segundos de espera para simular la ejecución
  };

  return (
    <div className="container">
      <div className="menu">
        <button title="Abre un archivo existente">
          <FontAwesomeIcon icon={faFolderOpen} />
          Archivo
        </button>
        <button title="Ejecuta el código en el editor" onClick={handleExecute}>
          <FontAwesomeIcon icon={faPlay} />
          Ejecutar
        </button>
        <button title="Genera los reportes (AST, Errores, etc.)">
          <FontAwesomeIcon icon={faChartBar} />
          Reportes
        </button>
      </div>
      <div className="main">
        <div className="editor">
          <h2>Entrada</h2>
          <EditorComponent />
        </div>
        <div className="console">
          <h2>Consola</h2>
          {loading ? (
            <div className="spinner">
              <div className="lds-dual-ring"></div>
              Ejecutando...
            </div>
          ) : error ? (
            <div className="error-message">{error}</div>
          ) : (
            <ConsoleComponent output={consoleOutput} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
