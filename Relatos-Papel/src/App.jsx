import React from 'react';
import GlobalRouter from "./routes/GlobalRouter";
import { GlobalProvider } from "./context/GlobalContext"; // importa el provider

function App() {
  return (
    <GlobalProvider>
      <GlobalRouter />
    </GlobalProvider>
  );
}

export default App;
