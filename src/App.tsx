import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './Router';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {

  return (
    <main className='flex justify-center'>
      <BrowserRouter>
        <ThemeProvider>
          <LanguageProvider>
            <Router />
          </LanguageProvider>
        </ThemeProvider>
      </BrowserRouter>
    </main>
  )
}

export default App;
