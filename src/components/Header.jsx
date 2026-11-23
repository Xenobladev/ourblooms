import i1 from '../assets/logo/image-1.png'
import i2 from '../assets/logo/image-2.png'
import i3 from '../assets/logo/image.png'

function Header() {
    return(
        <header>
            <img src = {i1}
             srcSet = {`${i1} 400w, ${i2} 800w, ${i3} 1200w`}
             sizes = "(max-width: 600px) 100vw, 50vw"
             alt = "Our Blooms Logo" />


        </header>   
    )
}

export default Header