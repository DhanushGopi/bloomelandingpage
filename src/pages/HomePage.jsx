import About from "../section/About";
import CategorySec from "../section/CategorySec";
import EmptyBlock from "../section/EmptyBlock";
import Explore from "../section/Explore";
import Footer from "../section/Footer";
import Navbar from "../section/Navbar";
import ProductSec from "../section/ProductSec";
import Review from "../section/Review";
import WebBanner from "../section/WebBanner";

export default function HomePage(){
    return(
        <div className="cont">
            <Navbar/>
            <WebBanner/>
            <CategorySec/>
            <ProductSec/>
            <About/>
            <Review/>
            <Explore/>
            <Footer/>
        </div>
    )
}