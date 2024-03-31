import "./dish.css"

const Dish = ({dish}) =>{

  const {name, desc, price, category, add_ons} = dish

  const priceKeys = Object.keys(price)
  const priceElements = priceKeys.map((key, index)=>(
    <p key={index}>${price[key]} / {key.replace("_", " ").toUpperCase()}</p>
  ));

  return(
    <div className="dish-container">
      <h2>{name}</h2>
      <div className="desc-container">
      <p>{desc}</p>
      <h4>Price: {priceElements}</h4>
      {add_ons && add_ons.length > 0 && (
        <div>
          <h4>Add-ons:</h4>
          <ul>
            {add_ons.map((addOn, index) => (
              <li key={index}>{addOn.item}: ${addOn.price}</li>
            ))}
          </ul>
        </div>
      )}
      </div>  
      
    </div>
  )
}

export default Dish