// import React from 'react';
// import Header from './components/Header/Header';


// function App(){
//   return(
// <div>

//   <Header></Header>
// </div>
//   )
// }

// export default App






import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Reviews from './components/Reviews/Reviews';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>} ></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>} ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/contact" element={<Contact></Contact>} ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>

      </Routes>
      
    </div>
  );
}

 export default App;
