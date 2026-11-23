import '../App.css';
import AboutHeader from '../components/AboutHeader';
import AboutContainer from '../components/AboutContainer';
import Footer from '../components/Footer';

function About () {
    return(
        <>
            <hr className = "divider"></hr>
            <AboutHeader />
            <AboutContainer />
            <Footer />
        </>
    )
}

export default About