import offer from "../assests/offer.svg"

export default function SpecialOffers(){
   return(
    <div className="chip chip-bs">
    <img className="chip-icon" src={offer} alt="Special Offers" srcset="" />
    <p className="chip-text">Special Offers</p>       
    </div>
   ) 
}