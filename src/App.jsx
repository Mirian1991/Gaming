import { createBrowserRouter ,   RouterProvider,  } from 'react-router-dom';

import { Header, Footer,} from "./components";

import { Homepage, Mobilegames,Aboutpage, Contactpage, Notfoundpage, Createacountpage, Loginpage,} from "./pages";



export const App = () => {

  
const router = createBrowserRouter ([ 
  {
    path:"/",
    element:<Homepage/>,
    errorElement: <Notfoundpage/>,
  },

  {
    path:"/mobilegames",
    element: <Mobilegames/>,

  },

  {
    path:"/AboutPage",
    element: <Aboutpage/>,
  },

  {
    path:"/ContactPage",
    element:<Contactpage/>,
  },
  {
    path:"/Creatacountpage",
    element:<Createacountpage/>,
  },
  {
    path:"/Loginpage",
    element:<Loginpage/>,
  },

]) ;
   


  return (
   <>

   <Header/>
   <RouterProvider router = {router }/>
   <Footer/>
   
   </>
  );
}

 



