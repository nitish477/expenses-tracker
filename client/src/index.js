import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './view/Home/Home';
import Signup from './view/Signup/Signup';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  
  {
    path:'/signup',
    element:<Signup/>
  }
])
root.render(<RouterProvider router={router}/>);

