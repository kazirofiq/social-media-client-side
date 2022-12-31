import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='bg-slate-100'>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
