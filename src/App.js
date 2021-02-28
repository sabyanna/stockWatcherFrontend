import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserMainPage from './Components/UserMainPage';
import Registration from './Components/User/Registration';
import Login from './Components/User/Login';
import SymbolDataContextProvider from './Contexts/SymbolDataContext';

function App() {
  return (
    <div className="App">
      <SymbolDataContextProvider>
        <Router>
          <Route exact path="/registration" component={ Registration }/>
          <Route exact path="/" component={ Login }/>
          <Route exact path="/home" component={ UserMainPage }/>
        </Router>
      </SymbolDataContextProvider>
    </div>
  );
}

export default App;
