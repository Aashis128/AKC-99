import HomeItem from './HomeItem.js';
function HomeItemList(props){
    return(
        <ul>
            {props.homeitems.map((homeitems) => <HomeItem 
                          image = {homeitems.image}
                          name={homeitems.title}
                          address={homeitems.address}
                          price={homeitems.description}/>)}
        </ul>
    )
}
export default HomeItemList;