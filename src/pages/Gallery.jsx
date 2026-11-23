import '../App.css';
import GalleryHeader from '../components/GalleryHeader';
import GalleryContainer from '../components/GalleryContainer';
import WorkWithUs from '../components/WorkWithUs';
import Footer from '../components/Footer';

function Gallery() {
    return(
        <>
            <GalleryHeader />
            <GalleryContainer />
            <WorkWithUs />
            <Footer />
        </>
    )
}

export default Gallery;