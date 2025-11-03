import exploreimg from '../assests/bloomebundle.png';
import PrimaryBtn from '../components/PrimaryBtn';

export default function Explore(){
    return(
        <div className="explore">
            <div className="explore-left">
                <div className="explore-herotext">Ready to Bloomé Naturally?</div>
                <div className="explore-subtext">Discover skincare that loves your skin and the planet.</div>
                <PrimaryBtn  btntext="Explore"/>
            </div>
            <img className="explore-right explore-img" src={exploreimg} alt="" srcset="" />
        </div>
    )
}