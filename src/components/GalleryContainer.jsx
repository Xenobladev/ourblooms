import i1 from '../assets/galleryFlower/Image.png'
import i2 from '../assets/galleryFlower/Image2.png'
import i3 from '../assets/galleryFlower/Image3.png'
import i4 from '../assets/galleryFlower/Image4.png'
import i5 from '../assets/galleryFlower/Image5.png'
import i6 from '../assets/galleryFlower/Image6.png'
import i7 from '../assets/galleryFlower/Image7.png'
import i8 from '../assets/galleryFlower/Image8.png'
import i9 from '../assets/galleryFlower/Image9.png'

import c1 from '../assets/serviceFlower/Image.png'
import c2 from '../assets/serviceFlower/Image2.png'
import c3 from '../assets/serviceFlower/Image3.png'

function GalleryContainer() {
    return(
        <>
        <div className = "about">
            <h2 className = "caption1">Seasonal Arrangements</h2>
            <div className = "gallery">
                <div className = "gallery-items">
                    <div>
                        <p className = "caption2">DAWN BLOOM</p>
                        <p className = "heading4">$55/bunch</p>
                        <img src = {i1} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    <div>
                        <p className = "caption2">SOLSTICE STEMS</p>
                        <p className = "heading4">$30/bunch</p>
                        <img src = {i2} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    <div>
                        <p className = "caption2">WHISPER GREENS</p>
                        <p className = "heading4">$120/bunch</p>
                        <img src = {i3} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    <div>
                        <p className = "caption2">CLARITY PETALS</p>
                        <p className = "heading4">$55/bunch</p>
                        <img src = {i4} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    <div>
                        <p className = "caption2">RIVER STONE</p>
                        <p className = "heading4">$30/bunch</p>
                        <img src = {i5} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    <div>
                        <p className = "caption2">MOONLIT MEADOW</p>
                        <p className = "heading4">$120/bunch</p>
                        <img src = {i6} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    <div>
                        <p className = "caption2">EMBER LEAF</p>
                        <p className = "heading4">$55/bunch</p>
                        <img src = {i7} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    <div>
                        <p className = "caption2">SKYLINE BLOOM</p>
                        <p className = "heading4">$75/bunch</p>
                        <img src = {i8} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    <div>
                        <p className = "caption2">STILL WATERS</p>
                        <p className = "heading4">$250/bunch</p>
                        <img src = {i9} alt = "flower arrangement" className = "gallery-image" />
                    </div>
                    
                </div>
                <hr className = "divider"></hr>
            </div>
        </div>

        <div className = "about">
            <h2 className = "caption1">SERVICES</h2>
            <div className = "gallery">
                <h3 className = "heading1">FLORAL INSTALLATIONS</h3>
                <p className = "paragraph1">We create clean, contemporary designs that elevate any environment, from intimate gatherings to grand events.</p>
                <img src = {c1} alt = "flower arrangement" className = "gallery-image" />
                <hr className = "divider"></hr>

                <h3 className = "heading1">NATIVE PLANT ARRANGEMENTS</h3>
                <p className = "paragraph1">Our selection of locally sourced flora brings natural resilience and effortless elegance to your home.</p>
                <img src = {c2} alt = "flower arrangement" className = "gallery-image" />
                <hr className = "divider"></hr>

                <h3 className = "heading1">CUSTOM FLORAL CONCEPTS</h3>
                <p className = "paragraph1">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple.</p>
                <img src = {c3} alt = "flower arrangement" className = "gallery-image" />
            </div>
        </div>
        </>
    )
}

export default GalleryContainer