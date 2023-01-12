import './App.scss';
import Navigation from './components/Navigation';
import ContextProvider from './context/ContextProvider';

function App() {
  return (
    <div className="App">
      <ContextProvider >
        <Navigation/>
      </ContextProvider>
    </div>
  );
}

export default App;
