import React, { useState } from 'react';
import { Editor } from '@monaco-editor/react'; // Cambia MonacoEditor por Editor

const EditorComponent = () => {
  const [code, setCode] = useState('');

  // Opciones del editor, incluyendo el resaltado de la línea actual
  const editorOptions = {
    selectOnLineNumbers: true,          // Permite seleccionar líneas al hacer clic en los números
    roundedSelection: false,            // Evita que la selección sea redondeada
    readOnly: false,                    // Editor no es de solo lectura
    cursorStyle: 'line',                // Estilo de cursor como línea
    automaticLayout: true,              // Ajuste automático al tamaño
    lineNumbers: 'on',                  // Mostrar los números de línea
    renderLineHighlight: 'line',        // Resalta la línea actual
    scrollBeyondLastLine: false,        // Evitar que se pueda hacer scroll más allá de la última línea
    minimap: { enabled: false },        // Desactiva el minimapa para una interfaz más limpia
  };

  const handleEditorChange = (newValue) => {
    setCode(newValue);
  };

  return (
    <div>
      <Editor
        height="500px"
        defaultLanguage="javascript"
        defaultValue="// Escribe tu código aquí..."
        value={code}
        onChange={handleEditorChange}
        options={editorOptions}
        theme="vs-dark"  // Tema oscuro para el editor
      />
    </div>
  );
};

export default EditorComponent;
