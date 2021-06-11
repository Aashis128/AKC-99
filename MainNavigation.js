import './MainNavigation.module.css'
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return(
        <div>
        <header className= {classes.header} >
        <div className={classes.logo}><Link to = '/'>EasyRooms</Link></div>
        <nav className={classes.navbar}>
            <ul >
                <li><Link to='/Login'>LogIn</Link></li>
                <li><Link to ='/Signup' >SignUp</Link></li>
            </ul>
        </nav>
        </header>
        </div>
    )
}
export default MainNavigation;