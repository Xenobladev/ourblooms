import i1 from '../assets/story/Image.png'
import i2 from '../assets/story/Image-1.png'
import i3 from '../assets/story/Image-2.png'
import f1 from '../assets/aboutFlower/flower1.png'
import f2 from '../assets/aboutFlower/flower2.png'
import f3 from '../assets/aboutFlower/flower3.png'
import b1 from '../assets/breaker/Image breaker.png'
import b2 from '../assets/breaker/Image breaker-1.png'
import b3 from '../assets/breaker/Image breaker-2.png'
import Button from './Button'

function AboutContainer () {
    return(
        <>
        <div className = "about">
            <h2 className = "caption1">Our Story</h2>
            <div className = "about-text">
                <div className = "about-owner">
                    <img src = {i1}
                    srcSet = {`${i1} 400w, ${i2} 800w, ${i3} 1200w`}
                    sizes = "(max-width: 600px) 100vw, 50vw"
                    alt = "flower" className = "about-image" />
                    <div>
                        <p className = "caption2">Lily Smith</p>
                        <p className = "heading4">Owner</p>
                    </div>
                </div>
                <p className = "heading2">Our Blooms was founded in honor of Lily Smith's loving aunts, Teresa and Beth.</p>
                <section className = "caraousel">
                    <img src={f1} alt="flower1" className="about-image" />
                    <img src={f2} alt="flower2" className="about-image" />
                    <img src={f3} alt="flower3" className="about-image" />
                </section>
                <p className = "paragraph2">Lily's journey with flowers began in the heart of Oregon, amidst the flourishing fields of her aunts' flower farm. It was there, surrounded by the abundance of nature, that she discovered her passion for floral design. From learning the names of each bloom to understanding the delicate balance of a bouquet, she absorbed the artistry of flowers like the rich Oregon soil. </p>
                <p className = "paragraph2">Bloom & Co. is the expression of that lifelong passion, a place where her love for flowers translates into beautifully curated arrangements that bring joy and elegance to your spaces.</p>
                <img src = {b1}
                srcSet = {`${b1} 400w, ${b2} 800w, ${b3} 1200w`}
                sizes = "(max-width: 600px) 100vw, 50vw"
                alt = "flower" className = "about-image" />
                <p className = "paragraph2">From humble beginnings, Bloom&Co has grown into a beloved local destination, known for its artistic arrangements, personal service, and commitment to quality.</p>
                <p className = "paragraph2">Discover how we can add a touch of natural beauty to your next event.</p>
                <Button buttonName = "BOOK A CONSULTATION"/>
            </div>
        </div>
        </>
    )
}

export default AboutContainer