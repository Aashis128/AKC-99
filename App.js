import MainNavigation from  './MainNavigation.js';
import './App.css';
import { Route,Switch}  from 'react-router-dom';
import Home from './Home.js';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';

function App() {
  return (<div>
    <MainNavigation/>
<Switch>
  <Route path='/' exact= {true}><Home/></Route>
  <Route path ='/Login'><LogIn/></Route>
  <Route path ='/Signup'><SignUp/></Route>
</Switch>
</div>
  )
}

export default App;
