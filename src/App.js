import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserMainPage from './Components/UserMainPage';
import Registration from './Components/User/Registration';
import Error from './Components/Error';
import Login from './Components/User/Login';
import SymbolDataContextProvider from './Contexts/SymbolDataContext';
import ErrorContextProvider from './Contexts/ErrorContext';

function App() {
  return (
    <div className="App">
      <SymbolDataContextProvider>
        <ErrorContextProvider>
          <Router>
            <Route exact path="/registration" component={ Registration }/>
            <Route exact path="/" component={ Login }/>
            <Route exact path="/home" component={ UserMainPage }/>
          </Router>
          <Error/>
        </ErrorContextProvider>
      </SymbolDataContextProvider>
      <Error/>
    </div>
  );
}

export default App;
