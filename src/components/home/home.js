import "./home.css"
import cover1 from "../../photos/cover1.png"
import cover2 from "../../photos/cover2.png"

const Home = () =>{
  return(
    <div className="home-container">
    <div className="grid-container">
    <div className="left-side-container">
      <div className="text">
        <h1 className="title">Linamnam</h1>
        <h2 className="heading">Lutong Bahay Delights</h2>
        <h3 className="sub-heading">Bringing Filipino home-cooked flavors to your table. Taste the essence of the Philippines with us.</h3>
      </div>
    </div>
    <div className="right-side-container">
      <img src={cover1} />
      <img src={cover2} />
    </div>
    </div>
    </div>
  )
}

export default Home