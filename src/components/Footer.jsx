import i1 from '../assets/footer/Image.png'
import i2 from '../assets/footer/Image-1.png'
import i3 from '../assets/footer/Image-2.png'

function Footer () {
    return(
        <>
        <img src = {i1}
        srcSet = {`${i3} 400w, ${i2} 800w, ${i1} 1200w`}
        sizes = "(max-width: 600px) 100vw, 50vw"
        alt = "flower" />
        </>
    )
}

export default Footer