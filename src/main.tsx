import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { PageProvider } from './utils/context/PageContext.tsx';

createRoot(document.getElementById('root')!).render(
  <>
    <PageProvider>
      <App />
    </PageProvider>
  </>
);
