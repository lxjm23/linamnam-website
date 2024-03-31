import "./nav-bar.css"

const NavBar = () =>{

  const click = () =>{
    console.log("clicked")
  }

 return(
  <div className="nav-bar-container">
    <div className="nav-bar">
      <a href="/" className="logo">Linamnam</a>
      <div className="nav-buttons">
        <a href="/" className="nav-link">Home</a>
        <div className="dropdown">
        <a href="/menu" className="nav-link">Menu</a>
        <div className="dropdown-menu">
          <a onClick={click} href="#pork">Pork</a>
          <a href="#beef">Beef</a>
          <a href="#vegetable">Vegetable</a>
          <a href="#Pica-pica">Pica Pica</a>
        </div>
        </div>
        <a href="/about-us" className="nav-link">About Us</a>
        <a href="/contact-us" className="nav-link">Contact Us</a>
        <a href="/order-now"><button className="order-now-btn">Order Now</button></a>
      </div>
    </div>
  </div>
 ) 
}

export default NavBar;