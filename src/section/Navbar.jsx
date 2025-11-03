import bloomelogo from '../assests/bloomelogo.svg'
import PrimaryBtn from '../components/PrimaryBtn'

export default function Navbar(props){
    return(
        <div className="navbar">
            <img className="bloomelogo" src={bloomelogo} alt="BounceBack Logo"/>
            <div className='navpathlinks'>
                <a href="#about" className='textoutline'><p className="navbtn">About</p></a>
                <a href="#product" className='textoutline'><p className="navbtn">Products</p></a>
                <a href="#review" className='textoutline'><p className="navbtn">Review</p></a>
                <a href="#contact" className='textoutline'><p className="navbtn">Contact</p></a>
            </div>
            <a href="https://dhanushgopi.github.io/portfolio/"><PrimaryBtn btntext="Login"/></a>
        </div>
    )
}