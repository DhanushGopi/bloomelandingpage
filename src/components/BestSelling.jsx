import best from "../assests/best.svg"

export default function BestSelling(){
   return(
    <div className="chip chip-sp">
    <img className="chip-icon" src={best} alt="New Arrivals" srcset="" />
    <p className="chip-text">Best Selling</p>       
    </div>
   ) 
}