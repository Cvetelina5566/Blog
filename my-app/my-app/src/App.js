import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import IndexPage from './views/indexPage';
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
       <BrowserRouter>
       <Routes>
       <Route
      element={<IndexPage />}
      path="/">

      </Route>
      </Routes>
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
