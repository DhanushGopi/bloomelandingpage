import whitelogo from '../assests/bloomewhitelogo.svg'

export default function Footer(){
    return(
        <div id="contact"className="footer">
            <img className='footer-top footer-logo' src={whitelogo} alt="" srcset="" />
            <div className='footer-bottom'>
                <p className='footer-copyright'>© Bloomé Cosmetics 2025. All Rights Reserved.</p>
                <p className='footer-terms'>Terms & Conditions  |  Privacy Policy  |  Return & Refund Policy</p>
            </div>
        </div>
    )
}