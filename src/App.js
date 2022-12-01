import { RouterProvider } from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { router } from './Routes/Routes';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <div className='max-w-[1300px] mx-auto'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
