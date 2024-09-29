import React from 'react';

const ConsoleComponent = ({ output }) => {
  return (
    <textarea
      value={output}
      readOnly
      rows="20"
    />
  );
};

export default ConsoleComponent;
