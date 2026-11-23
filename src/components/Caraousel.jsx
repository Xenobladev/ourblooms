import c1 from '../assets/caraousel/flower1.png'
import c2 from '../assets/caraousel/flower2.png'
import c3 from '../assets/caraousel/flower3.png'
import c4 from '../assets/caraousel/flower4.png'
import c5 from '../assets/caraousel/flower5.png'
import Button from './Button'
import '../App.css';

function Caraousel () {
    return(
        <>
        <div className = "content">
            <p className = "caption1">Who we are</p>
            <p className = "heading2">We're Our Blooms *copyright* and we're here to help you find your floral story. </p>
            <Button buttonName = "ABOUT US"/>
        </div>
        <section className = "caraousel">
            <img src={c1} alt="flower1" />
            <img src={c2} alt="flower2" />
            <img src={c3} alt="flower3" />
            <img src={c4} alt="flower4" />
            <img src={c5} alt="flower5" />
        </section>
        </>
    )
}

export default Caraousel