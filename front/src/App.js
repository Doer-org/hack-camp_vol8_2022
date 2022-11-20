import './styles/App.css';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
