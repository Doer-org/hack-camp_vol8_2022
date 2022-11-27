import './styles/App.css';
import { AppContainer } from './components/layout/AppContainer';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { AppRoutes } from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <div className="flex flex-col min-h-screen">
            <Header />
            <AppContainer>
              <AppRoutes />
            </AppContainer>
            <Footer />
          </div>
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
