import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Router } from './Router';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {

  return (
    <main className='flex justify-center'>
      <BrowserRouter>
        <LanguageProvider>
          <Router />
        </LanguageProvider>
      </BrowserRouter>
    </main>
  )
}

export default App;
