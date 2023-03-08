import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Route,Routes } from 'react-router-dom';
import Input from './components/Header/Inputs/input';
const App=()=>{  
   return(
    <div className='App'>
       <Header/>
       <Main/>
    </div>
   )
}

export default App;
