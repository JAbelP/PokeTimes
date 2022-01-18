import Navbar from './Components/Navbar';
import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import { Component } from 'react';




class App extends Component {
  render(){
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar/>
        <Routes>
          <Route path = '/' element = {<Home/>}/>
          <Route path = '/contacts' element = {<Contact/>}/>
          <Route path = '/about' element = {<About/>}/>

        </Routes>
      </div>
    </BrowserRouter>
  );
}
}

export default App;
