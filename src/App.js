
import './App.css';
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Homie from './components/Homie';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Catalogue from './components/Catalogue';
function App() {
  let bowserRouter=createBrowserRouter([{
    path:'',
    element:<Home/>,
    children:[
      {
        path:'',
        element:<Homie/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/register',
        element:<Register/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
        {
          path:'/cart',
          element:<Cart/>
        },
        {
          path:'/catalogue',
          element:<Catalogue/>
        }
      
    ]
  }])
  return (
    // <Router>
    //   <div className="App"> 
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/login" element={<Login/>} />
    //       <Route path="/register" element={<Register/>} />
    //       <Route path="/contact" element={<Contact/>} />
    //       <Route path="/cart" element={<Cart/>} />
    //     </Routes>
    //   </div>
    // </Router>
    <RouterProvider router={bowserRouter} />
  );
}

export default App;