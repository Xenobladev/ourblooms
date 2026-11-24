import i1 from '../assets/logo/Image.png'
import i2 from '../assets/logo/Image-1.png'
import i3 from '../assets/logo/Image-2.png'

function Header() {
    return(
        <header>
            <img src = {i1}
             srcSet = {`${i3} 400w, ${i2} 800w, ${i1} 1200w`}
             sizes = "(max-width: 600px) 100vw, 50vw"
             alt = "Our Blooms Logo" />
        </header>   
    )
}

export default Header