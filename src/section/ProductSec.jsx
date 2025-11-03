import NewArrivals from "../components/NewArrivals";
import SecBtn from "../components/SecBtn";
import ViewMoreBtn from "../components/ViewMorebtn";
import rating from "../assests/rating.svg";
import BestSelling from "../components/BestSelling";
import SpecialOffers from "../components/SpecialOffers";

export default function ProductSec(){
    return(
        <div id="product" className="product">
            <div className="product-top">
                <p className="title products-title">Featured Products</p>
                <ViewMoreBtn/>
            </div>
            <div className="product-bottom">
                <div className="product-card product-card1">
                    <NewArrivals/>
                    <p className="product-img product1"></p>
                    <div className="product-info product-info1">
                        <div className="rating rating1">
                            <img className="rating-icon" src={rating} alt="star" />
                            <p className="rating-text">4.7</p>
                        </div>
                        <p className="product-title product-title1">GlowNest Vitamin C Serum</p>
                        <div className="product-priceinfo product-priceinfo1">
                            <p className="product-oldprice product-oldprice1">₹450</p>
                            <p className="product-price product-price1">₹350</p>
                            <p className="product-offer product-offer1">| 11% Off</p>
                        </div>
                        <SecBtn btntext="Add to cart"/>
                    </div>
                </div>
                <div className="product-card product-card2">
                    <BestSelling/>
                    <p className="product-img product2"></p>
                    <div className="product-info product-info2">
                        <div className="rating rating2">
                            <img className="rating-icon" src={rating} alt="star" />
                            <p className="rating-text">4.5</p>
                        </div>
                        <p className="product-title product-title2">Bloome ReLeaf Under Eye Gel</p>
                        <div className="product-priceinfo product-priceinfo2">
                            <p className="product-oldprice product-oldprice2">₹950</p>
                            <p className="product-price product-price2">₹550</p>
                            <p className="product-offer product-offer2">| 20% Off</p>
                        </div>
                        <SecBtn btntext="Add to cart"/>
                    </div>
                </div>
                <div className="product-card product-card3">
                    <SpecialOffers/>
                    <p className="product-img product3"></p>
                    <div className="product-info product-info3">
                        <div className="rating rating3">
                            <img className="rating-icon" src={rating} alt="star" />
                            <p className="rating-text">4.0</p>
                        </div>
                        <p className="product-title product-title3">EcoShield SPF 30 Sunscreen</p>
                        <div className="product-priceinfo product-priceinfo3">
                            <p className="product-oldprice product-oldprice3">₹700</p>
                            <p className="product-price product-price3">₹450</p>
                            <p className="product-offer product-offer3">| 15% Off</p>
                        </div>
                        <SecBtn btntext="Add to cart"/>
                    </div>
                </div>
                <div className="product-card product-card4">
                    <BestSelling/>
                    <p className="product-img product4"></p>
                    <div className="product-info product-info4">
                        <div className="rating rating4">
                            <img className="rating-icon" src={rating} alt="star" />
                            <p className="rating-text">4.5</p>
                        </div>
                        <p className="product-title product-title4">AquaBloom Hydrating Gel</p>
                        <div className="product-priceinfo product-priceinfo4">
                            <p className="product-oldprice product-oldprice4">₹250</p>
                            <p className="product-price product-price4">₹100</p>
                            <p className="product-offer product-offer4">| 50% Off</p>
                        </div>
                        <SecBtn btntext="Add to cart"/>
                    </div>
                </div>
            </div>
        </div>
    )
}