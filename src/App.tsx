import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouter from './AppWithRouter';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }



const App: FC = () => {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
};

export default App;

