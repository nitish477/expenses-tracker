import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home';
import Signup from './view/Signup/Signup';
import Transaction from './view/Transaction/Transaction';
import About from './view/About/About';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/transation',
    element:<Transaction/>
  },
  {
    path:'/about',
    element:<About/>
  }
])
root.render(<RouterProvider router={router}/>);

