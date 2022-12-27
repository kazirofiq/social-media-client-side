import { createBrowserRouter, Link } from "react-router-dom";
import Main from "../layout/Main";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
           path: "/" ,
           element: <Home></Home>
        },
        {
           path: "/home" ,
           element: <Home></Home>
        },
        {
           path: "/media" ,
           element: <Media></Media>
        },
        {
           path: "/message" ,
           element: <Message></Message>
        },
        {
           path: "/about" ,
           element: <About></About>
        },
        {
           path: "/login" ,
           element: <Login></Login>
        },
        {
           path: "/signup" ,
           element: <SignUp></SignUp>
        },


      ]
    },
    {
        path:'*',
        element: 
        <div className="grid grid-cols-2 items-center">
            <div 
          className='text-center text-5xl text-red-600 mt-4 '>This Page Not Found 
          <span className='text-blue-600 text-sm'><Link to='/home'>click Home</Link></span>
          </div>
          <div>
            <img src="https://i.ibb.co/FzWYVyC/255-2550411-404-error-images-free-png-transparent-png.png" alt="" />
          </div>
        </div>
      },
  ]);