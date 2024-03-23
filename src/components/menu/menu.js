import "./menu.css"
import Dish from "../dish/dish"
const Menu = ({dishes}) =>  {
  return(
    
    
    <div className="container">
    <div className="menu-container text">
    <h1 className="page-heading">Our Menu</h1>
      {
        dishes.map((dish, index) =>{
          return <Dish dish={dish} key={index} />
        })
      }
    </div>
      
    </div>
    
  )
}

export default Menu