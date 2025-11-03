import about from "../assests/15years.png"

export default function About(){
    return(
        <div id="about" className="about">
            <div className="about-left">
                <p className="title about-title">Celebrating of 15 Years</p>
                <p className="about-text">For 15 years, Bloomé has crafted skincare that’s as kind to your skin as it is to the planet. We blend botanical science with sustainability, creating favorites like the Hydra Bloom Water Gel, GlowNest Serum, and EarthKiss Clay Mask. All delivering visible, natural results.
                <br></br><br></br>We’re proudly vegan, cruelty-free, and free from harmful chemicals, using only responsibly sourced, plant-based ingredients. From eco-safe packaging to biodegradable formulas, Bloomé celebrates 15 years of honest, sustainable beauty.
                <br></br><br></br>✨ Innovative by Nature. Honest by Choice.</p>
            </div>
            <img className="about-right about-img" src={about} alt="" srcset="" />

        </div>
    )
}