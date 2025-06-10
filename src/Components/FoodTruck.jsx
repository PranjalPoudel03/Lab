import Cards from './Cards'

const FoodTruck = (props) => {
 
    return (

    <div className="card">
      <img src={props.image} alt={props.name} className="card-image" />
      <h2>{props.name}</h2>
      <h4>{props.cuisine}</h4>
      <a href={props.menuLink} className="menu-button">View Menu</a>
    </div>

    );
}

export default FoodTruck;