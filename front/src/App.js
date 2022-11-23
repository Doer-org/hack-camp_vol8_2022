import './styles/App.css';
import { AppContainer } from './components/layout/AppContainer';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <AppContainer>
          <RecoilRoot>
            <AppRoutes />
          </RecoilRoot>
        </AppContainer>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
