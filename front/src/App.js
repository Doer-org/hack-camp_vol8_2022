import './styles/App.css';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
