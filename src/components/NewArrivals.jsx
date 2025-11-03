import hot from "../assests/hot.svg"

export default function NewArrivals(){
   return(
    <div className="chip chip-na">
    <img className="chip-icon" src={hot} alt="New Arrivals" srcset="" />
    <p className="chip-text">New Arrivals</p>       
    </div>
   ) 
}