import Title from '../components/Title'
import Caraousel from '../components/Caraousel'
import Header from '../components/Header'
import WhatWeDo from '../components/WhatWeDo'
import WorkWithUs from '../components/WorkWithUs'
import Footer from '../components/Footer'
import i1 from '../assets/home/Image.png'
import i2 from '../assets/home/Image-1.png'
import i3 from '../assets/home/Image-2.png'


function Home () {
    return(
        <>
            <hr className = "divider"></hr>
            <h1 className = "display2">Our Blooms®</h1>
            <Header />
            <Caraousel />
            <Title />
            <WhatWeDo />
            <img src = {i1}
            srcSet = {`${i3} 400w, ${i2} 800w, ${i1} 1200w`}
            sizes = "(max-width: 600px) 100vw, 50vw"
            alt = "flower" />
            <WorkWithUs />
            <Footer />
        </>
    )
}

export default Home