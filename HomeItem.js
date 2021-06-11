import Card from '../ui/Card.js';
import classes from './HomeItem.module.css';
function HomeItem(props){
    return(
        <li className={classes.items}>
            <Card>
            <div className={classes.image}>
                <img src={props.image} alt={props.name}></img>
            </div>
            <div className={classes.content}>
                <h2>{props.name}</h2>
                <address>{props.address}</address>
                <p>{props.price}</p>
            </div>
            <div className={classes.actions}>
            <button>Favorite</button>
            </div>
            </Card>
        </li>
    )
}
export default HomeItem;