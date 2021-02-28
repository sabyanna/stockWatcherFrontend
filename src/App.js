import './App.css';
import UserMainPage from './Components/UserMainPage';
import SymbolDataContextProvider from './Contexts/SymbolDataContext';

function App() {
  return (
    <div className="App">
      <SymbolDataContextProvider>
        <UserMainPage/>
      </SymbolDataContextProvider>
    </div>
  );
}

export default App;
