import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';
import { Router } from './Router';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {

  return (
    <HelmetProvider>
      <main className='flex justify-center'>
        <BrowserRouter>
          <ThemeProvider>
            <LanguageProvider>
              <Router />
            </LanguageProvider>
          </ThemeProvider>
        </BrowserRouter>
      </main>
    </HelmetProvider>
  )
}

export default App;
