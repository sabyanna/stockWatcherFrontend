import './App.css';
import UserMainPage from './Components/UserMainPage'
import SymbloDataContextProvider from './Contexts/SymbloDataContext'

function App() {
  return (
    <div className="App">
      <SymbloDataContextProvider>
        <UserMainPage/>
      </SymbloDataContextProvider>
    </div>
  );
}

export default App;
