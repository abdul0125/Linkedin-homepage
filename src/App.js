import React from 'react';
import './App.css';
import Feed from './Feed';
import Header from './Header.js';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

function App() {
  return (
    <div className="App">
     
     <Header/>
     <dev className='App_body'>

       
       <Sidebar/>
       <Feed/>
       <Widgets/>

     </dev>


     {/* Nav bar */}
     {/* App body */}
     {/* Side bar */}
    {/* Feed */}
    {/* Widgets */}
    </div>
  );
}

export default App;
