import ViewMoreBtn from "../components/ViewMorebtn";
import img1 from "../assests/img1.png";
import img2 from "../assests/img2.png";
import img3 from "../assests/img3.png";
import img4 from "../assests/img4.png";
import img5 from "../assests/img5.png";

export default function CategorySec(){
    return(
        <div className="category">
            <div className="category-top">
                <p className="title category-title">Shop by category</p>
                <ViewMoreBtn/>
            </div>
            <div className="category-bottom">
                <div className="categorycard categorycard1">
                    <img className="category-img category-img1"src={img1} alt="Cleanse & Prep" srcset="" />
                    <p className="category-text category-text1">Cleansers</p>
                </div>
                <div className="categorycard categorycard1">
                    <img className="category-img category-img1"src={img2} alt="Treat & Repair" srcset="" />
                    <p className="category-text category-text1">Treat & Repair</p>
                </div>
                <div className="categorycard categorycard1">
                    <img className="category-img category-img1"src={img3} alt="Hydrate & Protect" srcset="" />
                    <p className="category-text category-text1">Hydrate</p>
                </div>
                <div className="categorycard categorycard1">
                    <img className="category-img category-img1"src={img4} alt="Detox & Revive" srcset="" />
                    <p className="category-text category-text1">Detox & Revive</p>
                </div>
                <div className="categorycard categorycard1">
                    <img className="category-img category-img1"src={img5} alt="Lip Care" srcset="" />
                    <p className="category-text category-text1">Lip Care</p>
                </div>
            </div>
        </div>
    )
}