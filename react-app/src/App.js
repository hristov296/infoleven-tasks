import React from "react";

import Quote from "./components/Quote"

const App = () => {

  return (
    <div className="App">
      <div style={{ width: '100%', maxWidth: '1200px', marginLeft: 'auto', marginRight: 'auto', paddingTop: '100px' }}>
        <h1 style={{ textAlign: 'center' }}>Get stock quotes by symbols</h1>
        <Quote />
      </div>
    </div>
  );
}

export default App;