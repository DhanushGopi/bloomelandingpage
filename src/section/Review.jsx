import rating from "../assests/rating.svg"
export default function Review(){
    return(
        <div id="review" className="review">
            <div className="review-top">
                <div className="title review-title">Customer Review</div>
            </div>
            <div className="review-bottom">
                <div className="review-card review-card1">
                    <div className="review-info">
                        <p className="customer-name">Dhanush Gopi G</p>
                        <div className="rating">
                            <img className="rating-icon" src={rating} alt="star" />
                            <p className="rating-text">4.0</p>
                        </div>
                    </div>
                    <p className="review-msg">
                        “I’ve been using Bloomé for months now, and my skin has never felt this fresh! The Hydra Bloom Water Gel is super lightweight yet deeply hydrating perfect for humid weather. Plus, I love that it’s vegan and chemical-free!”
                    </p>
                </div>
                <div className="review-card review-card2">
                    <div className="review-info">
                        <p className="customer-name">Prabha A</p>
                        <div className="rating">
                            <img className="rating-icon" src={rating} alt="star" />
                            <p className="rating-text">4.5</p>
                        </div>
                    </div>
                    <p className="review-msg">
                        “The GlowNest Serum is pure magic. My dull skin literally started glowing within a week! What makes it even better is knowing that Bloomé stays true to its eco-friendly promise. Clean skincare that actually works!”
                    </p>
                </div>
                <div className="review-card review-card3">
                    <div className="review-info">
                        <p className="customer-name">Revathi K</p>
                        <div className="rating">
                            <img className="rating-icon" src={rating} alt="star" />
                            <p className="rating-text">4.7</p>
                        </div>
                    </div>
                    <p className="review-msg">
                        “I switched to Bloomé last year, and I’m never going back. The EarthKiss Clay Mask feels like a mini spa at home. My skin feels detoxed and calm after every use. Love how Bloomé celebrates natural beauty with purpose!”
                    </p>
                </div>
            </div>
        </div>
    ) 
}